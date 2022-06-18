import React from 'react';
import { Text } from 'ink';

export default function App({ name = 'Stranger' }: { name?: string }) {
  return (
    <Text>
      Hello, <Text color="green">{name}</Text>
    </Text>
  );
}
