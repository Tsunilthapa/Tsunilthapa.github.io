describe("Sum of all numbers in a array", function () {
    it("Total sum of array. [1,2,3,4] = 10 ", function () {
        assert.equal(sum([1, 2, 3, 4]), 10);
    });
});

describe("Reverse given String", function () {

    it("Input : abc, Expected Output : cba", function () {
        assert.equal(reverseInputString("abc"), "cba")
    });
});


describe("Multiply All elements of array by given number", function () {

    it("Input : ([1,2,3,4], 10) , Expected Output : [10,20,30,40]", function () {
        assert.deepEqual(multiplyEachElem([1, 2, 3, 4], 10), [10, 20, 30, 40])
    });
});

describe("Filter words longer than given length", function () {

    it("Input : ([abc,abcd,ab,a],2), Output : [abc,abcd]", function () {
        assert.deepEqual(filterLongWords(["abc", "abcd", "ab", "a"], 2), ["abc", "abcd"])
    });
});
