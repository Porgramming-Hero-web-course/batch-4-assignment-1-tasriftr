const countWordOccurrences = (sentence: string, word: string): number => {
    const sentenceLower = sentence.toLowerCase();
    const wordLower = word.toLowerCase();
    let numberOfOccurrences = sentenceLower.split(wordLower).length - 1;
    return numberOfOccurrences;
}

console.log(countWordOccurrences('i am tasrif, tasrif is good boy, tasrif is best,hi tasrif', 'tasrif'));