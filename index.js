#!/usr/bin/env node

`use strict`;

function echo(input) {
    console.debug('echo() function is invoked with argument "%s"', input);
    return input;
}

function helloWorld() {
    console.debug('helloWorld() function is invoked');
    return "Hello, World!";
}

module.exports = {
    echo,
    helloWorld
};
  