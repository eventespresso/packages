import React from 'react';
import classNames from 'classnames';
import { Textarea as ChakraTextarea } from '@chakra-ui/core';

import { TextareaProps } from './types';

const TextArea: React.FC<TextareaProps> = props => {
  const className = classNames('ee-input-base ee-textarea', props.className);

  return <ChakraTextarea {...props} className={className} variant="unstyled" />;
};

export default TextArea;
