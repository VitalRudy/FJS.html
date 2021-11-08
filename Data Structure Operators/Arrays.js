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
