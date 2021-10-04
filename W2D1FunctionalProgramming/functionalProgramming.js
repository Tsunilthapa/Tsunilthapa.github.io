function sum(inputArray) {
    var result = inputArray.reduce(
        function (accum, currItem) {
            accum = accum + currItem;
            return accum
        }, 0);

    return result;
};


function reverseInputString(inputString) {
    var charArray = inputString.split("");
    charArray = charArray.reverse();

    return charArray.join("");

};

function findLongestWord(inputArray) {
    var longestWord = inputArray.reduce((a, b) => a.length > b.length ? a : b);
    return longestWord;

};

function filterLongWords(inputArray, i) {
    var filteredArray = inputArray.filter(x => x.length > i);
    return filteredArray;
};


//Js Fiddle

function multiplyEachElem(inputArray, n) {
    var result = inputArray.map(function (item) {
        return item * n;
    });

    return result;
};



