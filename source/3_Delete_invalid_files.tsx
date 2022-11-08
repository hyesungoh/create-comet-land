import React, { useEffect, useState } from 'react';
import { Box, Text, useStdin } from 'ink';
import Spinner from 'ink-spinner';
import shell from 'shelljs';

import Configuration from './4_Configuration';
import MoreInformation from './5_More_Information';

const BASE_DIRECTORY = './comet-land/';

const INVALID_FILES = [
  '.git',
  '.github/workflows/CI.yml',
  '.github/codecov.yml',
  '.github/CODEOWNERS',
  'LICENSE',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
] as const;

const DELETE_FILES = INVALID_FILES.map(directory => `${BASE_DIRECTORY}${directory}`).join(' ');

export default function DeleteInvalidFiles() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isRawModeSupported } = useStdin();

  useEffect(() => {
    shell.exec(`rm -rf ${DELETE_FILES}`, { silent: true }, () => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <Box>
        <Box marginRight={1}>
          <Text color="green">
            <Spinner />
          </Text>
        </Box>

        <Text>Deleting invalid files...</Text>
      </Box>
    );

  if (isRawModeSupported) {
    return (
      <>
        <Text>✅ Deleted invalid files</Text>

        <Configuration />
      </>
    );
  }

  return (
    <>
      <Text>✅ Deleted invalid files</Text>
      <Text>❓ Does not support raw mode, please configure your self!</Text>

      <MoreInformation />
    </>
  );
}
