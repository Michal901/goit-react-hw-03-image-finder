// api.js

export const fetchImages = (query, page) => {
  const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=39663593-8d04c2e8107bf32f11cf1c5f8&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(URL)
    .then(res => res.json())
    .then(data => data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      return [];
    });
};
