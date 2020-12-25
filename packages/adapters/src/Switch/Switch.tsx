import { useCallback } from 'react';

import { Switch as ChakraSwitch } from '@chakra-ui/react';

import { isEnterKey } from '@eventespresso/utils';
import { SwitchProps } from './types';

const Switch: React.FC<SwitchProps> = ({ onChange, onChangeValue, ...props }) => {
	const onChangeHandler = useCallback<SwitchProps['onChange']>(
		(event) => {
			onChangeValue?.((event.target as HTMLInputElement).checked, event);
			onChange?.(event);
		},
		[onChange, onChangeValue]
	);

	const onKeyDown = useCallback<SwitchProps['onKeyDown']>((e) => {
		if (isEnterKey(e)) {
			e.preventDefault();
		}
	}, []);

	return <ChakraSwitch {...props} onChange={onChangeHandler} onKeyDown={onKeyDown} />;
};

export default Switch;
