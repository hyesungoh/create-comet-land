#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';

import App from './App';

meow(
  `
	Usage
	  $ create-comet-land

	Examples
	  $ npx create-comet-land
`
);

render(<App />);
