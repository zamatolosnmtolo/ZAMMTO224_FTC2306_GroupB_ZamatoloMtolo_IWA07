const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

// Calculate the total owed amount
const owed = leoBalance + sarahBalance;

// Format Leo's message
const leoMessage = `${leoName} ${leoSurname} Owed: R ${Math.abs(leoBalance).toFixed(2)}`;

// Format Sarah's message
const sarahMessage = `${sarahName} ${sarahSurname} Owed: R ${Math.abs(sarahBalance).toFixed(2)}`;

// Format the total owed message
const totalOwedMessage = `Total amount owed: R ${Math.abs(owed).toFixed(2)}`;

// Construct the final result
const result = `\n${leoMessage}\n${sarahMessage}\n\n${divider}\n${totalOwedMessage}\n${divider}`;

// Print the result
console.log(result);