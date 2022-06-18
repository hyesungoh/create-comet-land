import React from 'react';
import { Box, Newline, Text } from 'ink';

import CheckGithub from './1_Check_Github';

export default function App() {
  return (
    <Box flexDirection="column">
      <Text>
        Welcome to <Text color="blue">comet-land</Text> ☄️ ☄️ ☄️ !
        <Newline />
      </Text>

      <CheckGithub />
    </Box>
  );
}
