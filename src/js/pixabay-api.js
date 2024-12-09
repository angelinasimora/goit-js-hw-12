
import axios from 'axios';

export const searchImage = async (search, page, perPage) => {
  const url = `https://pixabay.com/api/`;

  const response = await axios.get(url, {
    params: {
      key: '47412698-017a3cc161c8c283fa818e1a7',
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page: page,
    },
  });

  return response.data;
};