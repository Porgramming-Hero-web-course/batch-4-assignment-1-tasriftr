"use strict";
const getProperty = (object, key) => {
    return object[key];
};
const person = { name: 'tasrif', age: '28' };
console.log(getProperty(person, 'name'));
