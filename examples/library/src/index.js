import { flatten } from 'lodash-es';
import { helloWorld } from './hello-world.js';

console.log('externals lodash', flatten([[0], [1]]).join(' '));

export default function () { console.log(helloWorld); }
