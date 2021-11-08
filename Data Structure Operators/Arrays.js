// Example of 'Higher Order Function'.

'use strict';

function repeater(fn) {
fn();
fn();
fn();
};

function sayHiThere () {
console.log('Hi There');
};


// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE
// arr.slice(2); // c , d , e;
// arr.slice(2, 4); // c, d;
// arr.slice(-2); // d, e;
// arr.slice(-1); // e;
// arr.slice(1, -1); // b, c;

// //SPLICE (This method is mutating original array);
// // arr.splice(2); // c, d , e;
// // arr.splice(-1); // a, b, c , d
// // arr.splice(1,2); // a, d;
// // arr;

// //REVERSE (This method is mutating original array)

// const arr2 = ['I', 'i', 'l', 'a', 't', 'i', 'V'];
// arr2.reverse(); //  V, I, T, A, L, I ,I

// //CONCAT

// const letters = arr.concat(arr2);
// letters; // A B C D E V I T A L I I

// // JOIN

// letters.join(' - '); // A - B - C - D - E - V = I - T - A - L - I - I
