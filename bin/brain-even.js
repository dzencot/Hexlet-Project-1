#!/usr/bin/env node
// @flow
/* eslint-disable no-console */

import oddGame from '../src/odd-game';
import * as index from '../index';

index.sayWelcome();
const name = index.answerNameUser();
index.sayHello(name);
oddGame(name);
