import { debounce } from 'lodash-es';

console.log('index.js');

const db = debounce(() => {
  console.log('debounced');
}, 500);
