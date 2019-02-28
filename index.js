#!/usr/bin/env node

`use strict`;

function echo(input) {
    console.log('echo() function is invoked with argument "%s"', input || "[EMPTY]");
    return input;
}

function helloWorld() {
    console.log('helloWorld() function is invoked');
    return "Hello, World!";
}

module.exports = {
    echo,
    helloWorld
};
  