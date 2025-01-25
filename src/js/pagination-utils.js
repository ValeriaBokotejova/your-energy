'use strict';
import sprite from '../img/sprite.svg';

const PAGINATION_ICO = {
  0: sprite + '#two-angle-left',
  1: sprite + '#one-angle-left',
  6: sprite + '#one-angle-right',
  7: sprite + '#two-angle-right',
};

const generateInnerPagesArr = (currentPage, totalPages) => {
  const arr = [];

  if (totalPages - currentPage <= 3) {
    for (let i = totalPages; i > 0 && arr.length < 4; i--) {
      arr.unshift(i);
    }
  }

  if (arr.length === 4 && arr[0] != 1) {
    arr[0] = 0;
  }

  if (arr.length === 0) {
    arr.push(currentPage);
    for (let i = 1; arr.length < 4; i++) {
      arr.push(currentPage + i <= totalPages && i != 3 ? currentPage + i : 0);
    }
  }

  if (arr.length === 1 && totalPages > currentPage) {
    arr.push(0);
  }

  for (let i = arr[0] - 1; i > 0 && arr.length < 4; i--) {
    arr.unshift(i);
  }

  while (arr.length < 4) {
    arr.push(-1);
  }
  arr.unshift(currentPage > 1 ? currentPage - 1 : -1);
  arr.unshift(currentPage > 1 ? 1 : -1);
  arr.push(currentPage < totalPages ? currentPage + 1 : -1);
  arr.push(currentPage < totalPages ? totalPages : -1);

  return arr;
};

const generatePaginationItemObjects = (currentPage, totalPages) => {
  const pages = generateInnerPagesArr(currentPage, totalPages);
  const leftBtns = new Set([0, 1]);
  const rightBtns = new Set([6, 7]);
  const sideBtns = leftBtns.union(rightBtns);
  return pages.map((el, idx) => [
    idx,
    el,
    sideBtns.has(idx) ? '' : el === 0 ? '...' : el > 0 ? el : '',
    el === currentPage ||
      (leftBtns.has(idx) && currentPage != 1) ||
      (rightBtns.has(idx) && currentPage != totalPages),
    sideBtns.has(idx) || el === currentPage,
  ]);
};

const addPaginationItemIco = idx => {
  return PAGINATION_ICO.hasOwnProperty(idx)
    ? `<svg width="20" height="20"><use href="${PAGINATION_ICO[idx]}"></use></svg>`
    : '';
};
const generatePaginationItem = (idx, page, title, accent, outline) => {
  return `<li class="pagination-item${accent ? ' accent' : ''}${
    outline ? ' outline' : ''
  }" data-page="${page}">${title}${addPaginationItemIco(idx)}</li>`;
};

const generatePaginationItems = (currentPage, totalPages) => {
  const pages = generatePaginationItemObjects(currentPage, totalPages);
  return pages.reduce((acc, el) => {
    return acc + generatePaginationItem(...el);
  }, '');
};

export const generatePaginationEl = (currentPage, totalPages) => {
  const items = generatePaginationItems(currentPage, totalPages);
  return `<ul class="pagination">${items}</ul>`;
};
