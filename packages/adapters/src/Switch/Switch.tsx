import React from 'react';
import { Switch as ChakraSwitch } from '@chakra-ui/core';

import { useOnChange } from '@eventespresso/hooks';
import type { SwitchProps } from './types';

export const Switch: React.FC<SwitchProps> = ({ onChange, onChangeValue, ...props }) => {
	const onChangeHandler = useOnChange({ onChange, onChangeValue });

	return <ChakraSwitch {...props} onChange={onChangeHandler} />;
};
