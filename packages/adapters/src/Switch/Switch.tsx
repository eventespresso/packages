import React, { useCallback } from 'react';
import { Switch as ChakraSwitch } from '@chakra-ui/core';

import { SwitchProps } from './types';

const Switch: React.FC<SwitchProps> = ({ onChange, onChangeValue, ...props }) => {
	const onChangeHandler = useCallback<SwitchProps['onChange']>(
		(event) => {
			onChangeValue?.((event.target as HTMLInputElement).checked, event);
			onChange?.(event);
		},
		[onChange, onChangeValue]
	);

	return <ChakraSwitch {...props} onChange={onChangeHandler} />;
};

export default Switch;
