// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

import showHealth from './health';
 
console.log('worked');
 
showHealth(70);

import sortUnits from './sort';

const a = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
sortUnits(a);