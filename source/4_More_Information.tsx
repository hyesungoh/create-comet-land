import React from 'react';
import { Box, Newline, Text } from 'ink';

const CONFIGURATION_GUIDE = 'https://github.com/hyesungoh/comet-land#how-to-configuration';
const EN_BLOG_POST_GUIDE = 'https://github.com/hyesungoh/comet-land/blob/main/_docs/en-blog.md';
const EN_RESUME_GUIDE = 'https://github.com/hyesungoh/comet-land/blob/main/_docs/en-resume.md';

export default function MoreInformation() {
  return (
    <Box flexDirection="column">
      <Newline />
      <Text>
        🎉 Now you can start your own <Text color="blue">comet-land</Text> with below command!
      </Text>
      <Newline />
      <Text>cd comet-land</Text>
      <Text>yarn</Text>
      <Text>yarn dev</Text>
      <Text dimColor>then runnin blog at http://localhost:3000, resume at http://localhost:3001</Text>
      <Newline />

      <Text>⚒️ Please check below link for find more configuration settings like...</Text>
      <Text dimColor>
        colors, social media accounts, url and{' '}
        <Text inverse color="cyan">
          more
        </Text>
        !
      </Text>
      <Text color="blueBright">{CONFIGURATION_GUIDE}</Text>
      <Newline />

      <Text>✒️ Posting blog guide is check below link</Text>
      <Text color="blueBright">{EN_BLOG_POST_GUIDE}</Text>
      <Newline />

      <Text>📄 Custom resume guide is check below link</Text>
      <Text color="blueBright">{EN_RESUME_GUIDE}</Text>
      <Newline />
    </Box>
  );
}
