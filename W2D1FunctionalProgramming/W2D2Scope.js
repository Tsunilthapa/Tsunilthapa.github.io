var x = 1;
var a = 5;
var b = 10;

var c = function (a, b, c) {
    console.log(x);
    console.log(a);

    var f = function (a, b, c) {
        b = a;
        console.log(b);
        b = c;
        var x = 5;
    };
    f(a, b, c);
    console.log(b);
    var x = 10;
}
c(9, 9, 10);