const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = -9394;

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = -4582.2;

const divider = '----------------------------------';

const leoOwed = leoName + ' ' + leoSurname + ' Owed: R ' + Math.abs(parseFloat(leoBalance)).toFixed(2);
const sarahOwed = sarahName + ' ' + sarahSurname + ' Owed: R ' + Math.abs(parseFloat(sarahBalance)).toFixed(2);
const totalOwed = Math.abs(parseFloat(leoBalance)) + Math.abs(parseFloat(sarahBalance));
const formattedTotal = 'Total amount owed: R ' + totalOwed.toFixed(2);

const result = '\n' + leoOwed + '\n' + sarahOwed + '\n\n' + divider + '\n' + formattedTotal + '\n' + divider;

console.log(result);