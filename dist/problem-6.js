"use strict";
const updateProfile = (profile, updates) => {
    return Object.assign(Object.assign({}, profile), updates);
};
const myProfile = { name: 'tasrif', age: 28, email: 'tasriffahim@gmail.com' };
console.log(updateProfile(myProfile, { age: 29 }));
