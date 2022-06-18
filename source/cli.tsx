#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';

import App from './ui';

const cli = meow(
  `
	Usage
	  $ create-comet-land

	Options
		--name  Your name

	Examples
	  $ create-comet-land --name=Jane
	  Hello, Jane
`,
  {
    flags: {
      name: {
        type: 'string',
      },
    },
  }
);

render(<App name={cli.flags.name} />);
