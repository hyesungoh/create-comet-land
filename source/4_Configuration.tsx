import React, { useState } from 'react';
import fs from 'fs';
import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';

import MoreInformation from './5_More_Information';

const DIRNAME = process.cwd() + '/comet-land';

interface IReplacement {
  directory: string;
  line: number;
  callback: (value: string) => string;
}

interface IConfiguration {
  question: string;
  description: string | null;
  replacements: IReplacement[];
}

const configurations: IConfiguration[] = [
  {
    question: 'What is your name?',
    description: 'it will be display at footer',
    replacements: [
      {
        directory: '/packages/core/constants/General/index.ts',
        line: 4,
        callback: (value: string) => {
          return `export const authorName = '${value}';`;
        },
      },
      {
        directory: '/apps/resume/_content/Header/data.json',
        line: 2,
        callback: (value: string) => {
          return `  "heading": "Hello, This is ${value}",`;
        },
      },
      {
        directory: '/apps/resume/_content/Header/data.json',
        line: 3,
        callback: (value: string) => {
          return `  "description": "I'm ${value}, who Foo company developer"`;
        },
      },
    ],
  },
  {
    question: 'What is your blog name?',
    description: 'it will be display at blog header',
    replacements: [
      {
        directory: '/apps/blog/_config/index.json',
        line: 2,
        callback: (value: string) => {
          return `  "blogName": "${value}",`;
        },
      },
    ],
  },
  {
    question: 'What is your blog description?',
    description: 'it will be display at blog header',
    replacements: [
      {
        directory: '/apps/blog/_config/index.json',
        line: 3,
        callback: (value: string) => {
          return `  "blogDescription": "${value}",`;
        },
      },
    ],
  },
  {
    question: 'What is your github repo?',
    description: 'for comment system, please write with "github username/repo name". ex) hyesungoh/comet-land',
    replacements: [
      {
        directory: '/apps/blog/_config/index.json',
        line: 4,
        callback: (value: string) => {
          return `  "blogRepo": "${value}",`;
        },
      },
    ],
  },
];

export default function Configuration() {
  const [index, setIndex] = useState<number>(0);
  const [eachValue, setEachValue] = useState<string>('');

  function clearEachValue() {
    setEachValue('');
  }

  interface GetReplacedFileProps extends Omit<IReplacement, 'directory'> {
    value: string;
    filePath: string;
  }

  function getReplacedFile({ filePath, line, callback, value }: GetReplacedFileProps) {
    const beforeFile = fs.readFileSync(filePath, 'utf-8').split('\n');
    beforeFile[line - 1] = callback(value);
    const replacedFile = beforeFile.join('\n');
    return replacedFile;
  }

  function replaceFile(value: string) {
    const { replacements } = configurations[index];

    replacements.forEach(replacement => {
      const { directory, line, callback } = replacement;
      const filePath = `${DIRNAME}${directory}`;

      const replacedFile = getReplacedFile({ filePath, line, callback, value });
      fs.writeFileSync(filePath, replacedFile, { encoding: 'utf-8' });
    });
  }

  function onSubmit(value: string) {
    replaceFile(value);
    clearEachValue();
    setIndex(prev => prev + 1);
  }

  if (configurations.length > index)
    return (
      <Box flexDirection="column">
        <Box>
          <Box marginRight={1}>
            <Text>{configurations[index].question}</Text>
          </Box>
          <TextInput value={eachValue} onChange={setEachValue} onSubmit={onSubmit} />
        </Box>

        <Text dimColor>{configurations[index].description}</Text>
      </Box>
    );

  return (
    <>
      <Text>✅ Done with default configuration!</Text>
      <MoreInformation />
    </>
  );
}
