"use strict";
const countWordOccurrences = (sentence, word) => {
    const sentenceLower = sentence.toLowerCase();
    const wordLower = word.toLowerCase();
    let numberOfOccurrences = sentenceLower.split(wordLower).length - 1;
    return numberOfOccurrences;
};
console.log(countWordOccurrences('i am tasrif, tasrif is good boy, tasrif is best,hi tasrif', 'tasrif'));
