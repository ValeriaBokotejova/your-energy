'use strict';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import { drawMarkupList, fetchCardByID } from './fav-functions/helper';
import {
  getAllIdFromLocalStorage,
  removeIdFromLocalStorage,
} from './localStorage';
import { showPagination } from './pagination.js';
import { getExercisesOnPage } from './utils.js';
import { showLoader, hideLoader } from './loader.js';
import ExerciseList from './exercise.list.js';

const list = document.querySelector('.fav-list-card');
const textDefault = document.querySelector('.fav-text-default');
let exerciseList = new ExerciseList();

let markupCards = '';
let getData = [];
let listId = [];

if (window.location.pathname.endsWith('/favorites.html')) {
  list.addEventListener('click', e => {
    if (e.target.nodeName === 'use') {
      const idCard = e.target.closest('.list-card-item').dataset.id;
      const answer = removeIdFromLocalStorage(idCard);
      if (answer) {
        iziToast.success({
          title: 'OK',
          message: 'Exercise removed!',
          position: 'topRight',
        });
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Exercise is not removed!',
          position: 'topRight',
        });
      }
      readFromLS();
    }
  });
}

const readFromLS = async (page = 1) => {
  showLoader();
  listId = getAllIdFromLocalStorage();
  const totalPages = Math.ceil(listId.length / 10);
  const itemsPerPage = getExercisesOnPage();
  let currentPage = page;
  let currentCards = (page - 1) * itemsPerPage;
  let count = 0;
  if (listId.length === 0) {
    list.innerHTML = '';
    hideLoader();
    if (textDefault.classList.contains('is-visible')) {
      textDefault.classList.remove('is-visible');
    }
    return;
  } else {
    try {
      showPagination(
        '.pagination-container',
        currentPage,
        totalPages,
        readFromLS,
        currentPage
      );
      if (listId.length < 10) {
        const promise = await Promise.all(listId.map(id => fetchCardByID(id)));
        getData = promise.map(obj => obj.data);
        markupCards = drawMarkupList(getData);
        if (!textDefault.classList.contains('is-visible')) {
          textDefault.classList.add('is-visible');
        }
        hideLoader();
        list.innerHTML = '';
        list.insertAdjacentHTML('beforeend', markupCards);
        return;
      }
      const remainingItems = listId.length - currentCards;
      if (remainingItems === 0) {
        return;
      }
      count = remainingItems < itemsPerPage ? remainingItems : itemsPerPage;

      const sliceList = listId.slice(currentCards, count + currentCards);
      currentCards += count;
      const promise = await Promise.all(sliceList.map(id => fetchCardByID(id)));
      getData = promise.map(obj => obj.data);
      markupCards = drawMarkupList(getData);
      if (!textDefault.classList.contains('is-visible')) {
        textDefault.classList.add('is-visible');
      }
      hideLoader();
      list.innerHTML = '';
      list.insertAdjacentHTML('beforeend', markupCards);
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: `${error.message}`,
        position: 'topRight',
      });
    }
  }
};
if (list) {
  readFromLS();
}
