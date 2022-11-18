"use strict";
let code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
let usersCode = [];
$(document).keyup(function (event) {
    let input = event.keyCode;
    usersCode.push(input);
    if (usersCode[usersCode.length - 1] === code[usersCode.length - 1]) {
    } else if (usersCode[usersCode.length - 1] !== code[usersCode.length - 1]) {
        usersCode = [];
    } else {
    }
    if (usersCode.length === 11) {
        alert('30 lives');
    }

});

