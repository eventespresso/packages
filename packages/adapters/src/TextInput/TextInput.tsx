import React, { useMemo } from 'react';
import { Input as ChakraInput } from '@chakra-ui/core';

import { useOnChange } from '@eventespresso/hooks';
import type { TextInputProps } from './types';

export const TextInput: React.FC<TextInputProps> = ({ onChange, onChangeValue, ...props }) => {
	const onChangeHandlerArg = useMemo(() => ({ onChange, onChangeValue }), [onChange, onChangeValue]);
	const onChangeHandler = useOnChange(onChangeHandlerArg);

	return <ChakraInput {...props} onChange={onChangeHandler} />;
};
