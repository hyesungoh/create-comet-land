import React, { useEffect, useState } from 'react';
import { Box, Text } from 'ink';
import Spinner from 'ink-spinner';
import shell from 'shelljs';

import Configuration from './4_Configuration';

export default function DeleteInvalidFiles() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    shell.exec('rm -rf ./comet-land/.git', { silent: true }, () => {
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

  return (
    <>
      <Text>✅ Deleted invalid files</Text>

      <Configuration />
    </>
  );
}
