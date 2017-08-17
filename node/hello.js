'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function age(age){
    console.log("I am " + age);
}

function sex(gender){
    console.log("I am " + gender)
}

module.exports = {
    greet:greet,
    age:age,
    sex:sex
}