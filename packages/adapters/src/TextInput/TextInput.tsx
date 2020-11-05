import React from 'react';
import { Input as ChakraInput } from '@chakra-ui/input';

import { useOnChange } from '@eventespresso/hooks';
import type { TextInputProps } from './types';

export const TextInput: React.FC<TextInputProps> = ({ onChange, onChangeValue, ...props }) => {
	const onChangeHandler = useOnChange({ onChange, onChangeValue });

	return <ChakraInput {...props} onChange={onChangeHandler} />;
};
