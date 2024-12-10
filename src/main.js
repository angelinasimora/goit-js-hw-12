import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { searchImage } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import errorIcon from './img/error.png';

const form = document.querySelector('.form');
const gallery = document.querySelector('ul.gallery');
const loader = document.querySelector('.loader');
const buttonLoadMore = document.querySelector('.button-search-more');
const section = document.querySelector('section');

let lightbox = new SimpleLightbox('.galery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


iziToast.settings({
  timeout: 4000,
  position: 'topRight',
});

iziToast.show({
  title: 'Hey⭐️',
  message: 'What are you looking?',
   backgroundColor: '#ffffff', 
  messageColor: '#000', 
  titleColor: '#000', 
  iconColor: '#ffffff',
  timeout: 7000,
});


let page = 1;
let perPage = 15;
let searchText = '';
let totalPages = 0;

const functionSearch = (first) => {
  if (first) {
    page = 1;
  }

  searchImage(searchText, page, perPage)
    .then(({ hits, totalHits }) => {
      totalPages = Math.ceil(totalHits / perPage);

      if (first) {
        gallery.innerHTML = '';
        buttonLoadMore.style.visibility = 'hidden';
      }

      const images = renderImages(hits);
      if (images) {
        loader.style.display = 'none';
      }

      if (hits.length === 0) {
        iziToast.error({
          iconUrl: errorIcon,
          iconColor: '#fff',
          imageWidth: 24,
          messageColor: '#fff',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        loader.style.display = 'none';
        gallery.innerHTML = '';
        return; // Вихід, якщо немає результатів
      }

      first
        ? (gallery.innerHTML = images)
        : gallery.insertAdjacentHTML('beforeend', images);

      // Інкрементація тільки якщо завантажено результати
      page += 1;

      if (page > totalPages) {
        loader.style.display = 'none';
        buttonLoadMore.style.visibility = 'hidden';

        if (totalPages > 0) {
          iziToast.info({
            iconColor: '#fff',
            imageWidth: 24,
            messageColor: '#fff',
            message: "We're sorry, but you've reached the end of search results.",
          });
        }

        return; // Вихід, якщо досягнуто кінця результатів
      }

      buttonLoadMore.style.visibility = 'visible';
      buttonLoadMore.style.display = 'block';

      const imageCard = document.querySelector('.gallery-item');
      if (imageCard) {
        const { y } = imageCard.getBoundingClientRect();
        window.scrollBy({
          top: -y * 2,
          behavior: 'smooth',
        });
      }

      lightbox.refresh();
      form.reset();
    })
    .catch((error) => {
      loader.style.display = 'none';
      gallery.innerHTML = '';
      iziToast.error({
        iconUrl: errorIcon,
        iconColor: '#fff',
        imageWidth: 24,
        messageColor: '#fff',
        message: error.message,
      });
    });
};

const createGalary = (e) => {
  e.preventDefault();
  gallery.innerHTML = '';
  loader.style.display = 'block';
  searchText = e.target.elements.search.value.trim();

  if (searchText === '') {
    iziToast.error({
      iconUrl: errorIcon,
      iconColor: '#fff',
      imageWidth: 24,
      messageColor: '#fff',
      message: 'Please write a query for search',
    });
    gallery.innerHTML = '';
    loader.style.display = 'none';
    return;
  }

  functionSearch(true);
    e.target.elements.search.value = '';

};

const addItemInGallery = () => {
  buttonLoadMore.style.display = 'none';
  loader.style.display = 'block';
  section.insertAdjacentElement('beforeend', loader);
  functionSearch(false);
};

form.addEventListener('submit', createGalary);
buttonLoadMore.addEventListener('click', addItemInGallery);
