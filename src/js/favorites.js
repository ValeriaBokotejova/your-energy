'use strict';
import { drawMarkupList, fetchCardByID } from './fav-functions/helper';
import { getAllIdFromLocalStorage } from './localStorage.js';

const list = document.querySelector('.fav-list-card');
const textDefault = document.querySelector('.fav-text-default');

let listId = [];
let markupCards = '';
let getData = [];

const readFromLS = async () => {
  listId = getAllIdFromLocalStorage();

  if (listId.length === 0) {
    if (textDefault.classList.contains('is-visible')) {
      textDefault.classList.remove('is-visible');
    }
    return;
  } else {
    try {
      const promise = await Promise.all(listId.map(id => fetchCardByID(id)));
      getData = promise.map(obj => obj.data);
      markupCards = drawMarkupList(getData);
      if (list) {
        textDefault.classList.add('is-visible');
        list.insertAdjacentHTML('beforeend', markupCards);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
};

readFromLS()
