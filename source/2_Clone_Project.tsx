import React, { useEffect, useState } from 'react';
import { Box, Text } from 'ink';
import Spinner from 'ink-spinner';
import shell from 'shelljs';

import Configuration from './3_Configuration';

const REPO_URL = 'https://github.com/hyesungoh/comet-land' as const;

export default function CloneProject() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    shell.exec(`git clone ${REPO_URL}`, () => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <Box>
        <Box marginRight={2}>
          <Text color="green">
            <Spinner />
          </Text>
        </Box>

        <Text>cloning project...</Text>
      </Box>
    );

  return (
    <>
      <Box>
        <Text>
          ✅ Clone the <Text color="blue">comet-land</Text>
        </Text>
      </Box>

      <Configuration />
    </>
  );
}
