#!/usr/bin/env node
// @flow
/* eslint-disable no-console */

import calcGame from '../src/calc-game';
import * as index from '../index';

index.sayWelcome();
const name = index.answerNameUser();
index.sayHello(name);
calcGame(name);
