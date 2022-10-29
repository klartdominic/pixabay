import Http from '../utils/Http';

export const getData = (value, page) => {
  return Http.get(
    `https://pixabay.com/api/?key=30941299-4f34efe2998493180809f3c77&q=${value}&image_type=photo&page=${page}`,
  );
};
