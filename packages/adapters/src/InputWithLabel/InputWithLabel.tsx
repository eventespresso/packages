import React from 'react';

import { InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/core';

import type { InputWithLabelProps } from './types';

export const InputWithLabel: React.FC<InputWithLabelProps> = ({ className, input, leftLabel, rightLabel }) => {
	return (
		<InputGroup className={className}>
			{leftLabel && <InputLeftAddon className='ee-input-with-label__left-addon'>{leftLabel}</InputLeftAddon>}

			{input}

			{rightLabel && <InputRightAddon className='ee-input-with-label__right-addon'>{rightLabel}</InputRightAddon>}
		</InputGroup>
	);
};
