const loader = document.querySelector('.loader');
const loaderContainer = document.querySelector('.loader-container');
const exercisesContainer = document.querySelector('.exercise-loader-container');

function constrainLoader() {
  const containerRect = exercisesContainer.getBoundingClientRect();
  const loaderRect = loaderContainer.getBoundingClientRect();

  const constrainedTop = Math.max(
    containerRect.top,
    Math.min(
      containerRect.bottom - loaderRect.height,
      (window.innerHeight - loaderRect.height) / 2
    )
  );

  loaderContainer.style.top = `${constrainedTop - containerRect.top}px`;
}

export const showExercisesLoader = () => {
  loader.classList.remove('hidden');
  constrainLoader();
  window.addEventListener('scroll', constrainLoader);
  window.addEventListener('resize', constrainLoader);
};

export const hideExercisesLoader = () => {
  loader.classList.add('hidden');
};

export const showLoader = () => {
  loader.classList.remove('hidden');
};

export const hideLoader = () => {
  loader.classList.add('hidden');
};
