describe("filter", function () {
    it("Takes an array of strings as param and removes them from the given sentence",
        function () {
            assert.equal("This house is nice!", "This bad house is not nice!".filter('not', 'bad'));
        });
});

describe("bubbleSort", function () {
    it("Sorting array of numbers in desc order",
        function () {
            assert.deepEqual([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort());
        });
});

describe("teach", function () {
    it("Takes string 'subject' as param and returns [teacher] is now teaching [subject]",
        function () {
            var teacher = new Teacher();
            teacher.initialize("Michael Zijlstra", 40);
            assert.deepEqual("Michael Zijlstra is now teaching CS401-WAP", teacher.teach("CS401-WAP"));
        });
});
