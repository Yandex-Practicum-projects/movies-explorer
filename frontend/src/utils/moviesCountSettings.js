let initialCountMovies = 0;
let loadCountMovies = 0;
const updateCount = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1000) {
    initialCountMovies = 12;
    loadCountMovies = 3;
  } else if (screenWidth >= 675) {
    initialCountMovies = 8;
    loadCountMovies = 2;
  } else {
    initialCountMovies = 5;
    loadCountMovies = 2;
  }
};

export { initialCountMovies, loadCountMovies, updateCount };