import React from 'react';
import { Alert as ChakraAlert, AlertIcon } from '@chakra-ui/core';

import { AlertProps } from './types';

const Alert: React.FC<AlertProps> = ({ description, iconProps, ...props }) => (
  <ChakraAlert {...props}>
    <AlertIcon />
    {description}
  </ChakraAlert>
);

export default Alert;
