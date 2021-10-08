//1

String.prototype.filter = function (...str) {
    let string = this;
    for (let i = 0; i < str.length; i++) {
        var regex = new RegExp(str[i], "g");
        string = string.replace(regex, '').replace(/  +/g, ' ');
    }
    return string;
};


// 2
Array.prototype.bubbleSort = function () {
    let temp;
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this.length - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                temp = this[j]
                this[j] = this[j + 1]
                this[j + 1] = temp
            }
        }
    }
    return this;
};


// learnjs.org/inheritance
var Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
}
var Student = function () { };
Student.prototype = new Person();

Student.prototype.learn = function (subject) {
    console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function () {
    this.teach = function (subject) {
        return this.name + " is now teaching " + subject;
    }
};
Teacher.prototype = new Person();
