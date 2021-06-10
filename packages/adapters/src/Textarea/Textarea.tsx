import { useMemo } from 'react';
import { Textarea as ChakraTextarea } from '@chakra-ui/react';

import { useOnChange } from '@eventespresso/hooks';

import type { TextareaProps } from './types';

export const Textarea: React.FC<TextareaProps> = ({ onChange, onChangeValue, ...props }) => {
	const onChangeHandlerArg = useMemo(
		() => ({ isDisabled: props.isDisabled, onChange, onChangeValue }),
		[onChange, onChangeValue, props.isDisabled]
	);

	const onChangeHandler = useOnChange(onChangeHandlerArg);

	return <ChakraTextarea {...props} onChange={onChangeHandler} variant='unstyled' />;
};
