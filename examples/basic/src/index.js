import { debounce } from 'lodash-es';
import { foo } from './foo.js';
import { bar } from './bar.js';

console.log('index.js');
console.log(`imported: ${foo}, ${bar}`);

export const db = debounce(() => {
  console.log('debounced');
}, 500);
