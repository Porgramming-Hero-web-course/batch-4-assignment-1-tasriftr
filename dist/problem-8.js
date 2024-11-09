"use strict";
const validateKeys = (object, keys) => {
    for (let key of keys) {
        if (!(key in object))
            return false;
    }
    return true;
};
const person = { name: 'tasrif', age: '28', home: 'dhaka' };
console.log(validateKeys(person, ['name', 'phone']));
console.log(validateKeys(person, ['name', 'age']));
