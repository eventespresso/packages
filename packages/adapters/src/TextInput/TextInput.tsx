import { useMemo, forwardRef } from 'react';

import { Input as ChakraInput } from '@chakra-ui/react';

import { useOnChange } from '@eventespresso/hooks';
import type { TextInputProps } from './types';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ onChange, onChangeValue, ...props }, ref) => {
	const onChangeHandlerArg = useMemo(() => ({ onChange, onChangeValue }), [onChange, onChangeValue]);
	const onChangeHandler = useOnChange(onChangeHandlerArg);

	return <ChakraInput {...props} onChange={onChangeHandler} ref={ref} />;
});
