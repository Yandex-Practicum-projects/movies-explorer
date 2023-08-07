const baseOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
};

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(res);
  }
  return res.json();
};

const request = (endipoint, options) => {
  return fetch(`${process.env.REACT_APP_API_URL}/${endipoint}`, {...baseOptions, ...options}).then(getResponseData);
};

export const signup = (formData) => {
  return request('signup', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
export const signin = (formData) => {
  return request('signin', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
export const checkToken = () => {
  return request('users/me');
};

export const signout = () => {
  return request('signout', {
    method: 'DELETE',
  });
};

export const updateUser = (formData) => {
  return request('users/me', {
    method: 'PATCH',
    body: JSON.stringify(formData),
  });
};

export const getSavedFilms = () => {
  return request('movies');
};

export const saveFilm = (film) => {
  return request('movies', {
    method: 'POST',
    body: JSON.stringify(film),
  });
};

export const deleteFilm = (id) => {
  return request(`movies/${id}`, {
    method: 'DELETE',
  });
};
