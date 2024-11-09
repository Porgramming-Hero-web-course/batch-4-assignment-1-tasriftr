"use strict";
const removeDuplicates = (arr) => {
    const noDuplicate = [];
    for (let i = 0; i < arr.length; i++) {
        if (!noDuplicate.includes(arr[i])) {
            noDuplicate.push(arr[i]);
        }
    }
    return noDuplicate;
};
const noDuplicateNumbers = removeDuplicates([5, 8, 3, 4, 9, 7, 6, 6, 3, 4, 1, 8, 9, 5, 7, 7, 3]);
console.log(noDuplicateNumbers);
