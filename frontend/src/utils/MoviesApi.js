const BASE_URL = process.env.REACT_APP_BEATFILM_URL;

export const getFilms = () => {
  return fetch(`${BASE_URL}/beatfilm-movies`, { method: 'GET'})
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.status);
      }
      return res.json();
    });
};
