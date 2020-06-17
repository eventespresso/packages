import React from 'react';
import { Radio as ChakraRadio } from '@chakra-ui/core';

import { RadioProps } from './types';

const Radio: React.FC<RadioProps> = props => {
  return <ChakraRadio {...props} />;
};

export default Radio;
