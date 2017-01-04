#!/usr/bin/env node
// @flow
/* eslint-disable no-console */

import readlineSync from 'readline-sync';
import oddGame from '../src/odd-game';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, '${name}'\n`);
oddGame(name);
