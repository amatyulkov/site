import * as React from 'react';
import { Code } from './code-block';

export default {
  component: Code,
  title: 'Code Block',
};

export const defaultCodeBlock = () => (
  <pre>
    <Code language={'javascript'}>let test = 'hello';</Code>
  </pre>
);
