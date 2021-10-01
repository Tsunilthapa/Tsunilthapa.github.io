function max(a, b) {
    if (a > b)
        return a;
    else
        return b;
}

function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}
function isVowel(inputChar) {
    inputChar = inputChar.toLowerCase();
    if (inputChar === 'a' || inputChar === 'e' || inputChar === 'i'
        || inputChar === 'o' || inputChar === 'u') {
        return true;
    }
    else {
        return false;
    }
}

function sum(inputArray) {
    var result = inputArray.reduce(
        function (accum, currItem) {
            accum = accum + currItem;
            return accum
        }, 0);

    return result;
}

function multiply(inputArray) {
    var result = inputArray.reduce(
        function (accum, currItem) {
            accum = accum * currItem;
            return accum
        }, 1);
    return result;
}

function reverse(inputString) {
    var charArray = inputString.split("");
    charArray = charArray.reverse();

    return charArray.join("");
}

function findLongestWord(inputArray) {
    var longestWord = inputArray.reduce((a, b) => a.length > b.length ? a : b);
    return longestWord;
}

function filterLongWords(inputArray, i) {
    var filteredArray = inputArray.filter(x => x.length > i);
    return filteredArray.toString();
}

//Js Fiddle

function multiplyEachElem(inputArray, n) {
    var result = inputArray.map(function (item) {
        return item * n;
    })

    return result.toString();
}

function retElemEqualTo3(inputArray) {
    return inputArray.filter(function (item) {
        return item === 3;
    }).toString();
}


function getProductOfAllElements(inputArray) {
    var result = inputArray.reduce(
        function (accum, currItem) {
            accum = accum * currItem;
            return accum
        }, 1);
    return result;
}


function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    }
    else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function main() {
    console.log("Expected output of max(100,200) is 200  " + myFunctionTest(200, max(100, 200)));
    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
    console.log("Expected output of isVowel('i') is true  " + myFunctionTest(true, isVowel('i')));
    console.log("Expected output of isVowel('i') is true  " + myFunctionTest(true, isVowel('i')));
    console.log("Expected output of sum([1,2,3,4,5]) is 15  " + myFunctionTest(15, sum([1, 2, 3, 4, 5])));
    console.log("Expected output of multiply([1,2,3,4,5]) is 120  " + myFunctionTest(120, multiply([1, 2, 3, 4, 5])));

    console.log("Expected output of reverse(abc) is cba  " + myFunctionTest("cba", reverse("abc")));


    console.log("Expected output of findLongestWord([abc,abcd]) is abcd  " + myFunctionTest("abcd", findLongestWord(["abc", "abcd"])));

    console.log("Expected output of filterLongWords([a,abc,abcd],3) is [abcd]  " + myFunctionTest("abcd", findLongestWord(["a", "abc", "abcd"], 3)));

    console.log("Expected output of multiplyEachElem([1,2,3,4],10) is [10, 20, 30, 40]  " + myFunctionTest('10,20,30,40', multiplyEachElem([1, 2, 3, 4], 10)));
    console.log("Expected output of retElemEqualTo3([1,2,3,4]) is [3]  " + myFunctionTest('3', retElemEqualTo3([1, 2, 3, 4])));
    console.log("Expected output of getProductOfAllElements([1,2,3,4]) is 24  " + myFunctionTest(24, getProductOfAllElements([1, 2, 3, 4])));

}

window.onload = function () {
    main();
}
