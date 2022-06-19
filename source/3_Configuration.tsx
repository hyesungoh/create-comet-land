import React, { useState } from 'react';
import fs from 'fs';
import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';

import MoreInformation from './4_More_Information';

const DIRNAME = process.cwd() + '/comet-land';

interface IConfiguration {
  question: string;
  description: string | null;
  directory: string;
  line: number;
  callback: (value: string) => string;
}

const configurations: IConfiguration[] = [
  {
    question: 'What is your name?',
    description: 'it will be display at footer',
    directory: '/packages/core/constants/General/index.ts',
    line: 4,
    callback: (value: string) => {
      return `export const authorName = '${value}';`;
    },
  },
  {
    question: 'What is your blog name?',
    description: 'it will be display at blog header',
    directory: '/apps/blog/_config/index.json',
    line: 2,
    callback: (value: string) => {
      return `  "blogName": "${value}",`;
    },
  },
  {
    question: 'What is your blog description?',
    description: 'it will be display at blog header',
    directory: '/apps/blog/_config/index.json',
    line: 3,
    callback: (value: string) => {
      return `  "blogDescription": "${value}",`;
    },
  },
  {
    question: 'What is your github repo?',
    description: 'for comment system, please write with "github username/repo name". ex) hyesungoh/comet-land',
    directory: '/apps/blog/_config/index.json',
    line: 4,
    callback: (value: string) => {
      return `  "blogRepo": "${value}",`;
    },
  },
];

export default function Configuration() {
  const [index, setIndex] = useState<number>(0);
  const [eachValue, setEachValue] = useState<string>('');

  function clearEachValue() {
    setEachValue('');
  }

  function getReplacedFile(value: string, filePath: string) {
    const { line, callback } = configurations[index];
    const beforeFile = fs.readFileSync(filePath, 'utf-8').split('\n');
    beforeFile[line - 1] = callback(value);
    const replacedFile = beforeFile.join('\n');
    return replacedFile;
  }

  function replaceFile(value: string) {
    const { directory } = configurations[index];
    const filePath = `${DIRNAME}${directory}`;
    const replacedFile = getReplacedFile(value, filePath);

    fs.writeFileSync(filePath, replacedFile, { encoding: 'utf-8' });
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
