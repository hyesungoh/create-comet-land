import React, { useEffect, useState } from 'react';
import { Box, Text } from 'ink';
import shell from 'shelljs';

import CloneProject from './2_Clone_Project';

export default function CheckGithub() {
  const [isCheckedGitInstalled, setIsCheckedGitInstalled] = useState<boolean>(false);

  useEffect(() => {
    if (shell.which('git')) {
      setIsCheckedGitInstalled(true);
    }
  }, []);

  if (!isCheckedGitInstalled)
    return (
      <Box>
        <Text>
          ❎ Please install <Text color="red">git</Text>, before start this project.
        </Text>
      </Box>
    );

  return (
    <>
      <Box>
        <Text>
          ✅ Already installed <Text color="red">git</Text>
        </Text>
      </Box>
      <CloneProject />
    </>
  );
}
