const loader = document.querySelector('.loader');
const loaderContainer = document.querySelector('.loader-container');
const exercisesContainer = document.querySelector('.exercise-loader-container');

function constrainLoader() {
  if (window.innerWidth >= 1440) {
    exercisesContainer.style.minHeight = '500px';
    exercisesContainer.style.width = '900px';

    const containerRect = exercisesContainer.getBoundingClientRect();
    const loaderRect = loaderContainer.getBoundingClientRect();

    const constrainedLeft = Math.max(
      containerRect.left,
      Math.min(
        containerRect.right - loaderRect.width,
        (window.innerWidth - loaderRect.width) / 2
      )
    );

    const constrainedTop = Math.max(
      containerRect.top,
      Math.min(
        containerRect.bottom - loaderRect.height,
        (window.innerHeight - loaderRect.height) / 2
      )
    );

    loaderContainer.style.left = `${constrainedLeft - containerRect.left}px`;
    loaderContainer.style.top = `${constrainedTop - containerRect.top}px`;
  }
}

window.addEventListener('scroll', constrainLoader);
window.addEventListener('resize', constrainLoader);

export const showExercisesLoader = () => {
  loader.classList.remove('hidden');
  constrainLoader();
};

export const showLoader = () => {
  loader.classList.remove('hidden');
};

export const hideLoader = () => {
  loader.classList.add('hidden');
};
