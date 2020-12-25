import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

import type { CheckboxProps } from './types';

export const Checkbox: React.FC<CheckboxProps> = ({ label, children, ...props }) => {
	return <ChakraCheckbox {...props}>{label || children}</ChakraCheckbox>;
};
