import { FormLabel as ChakraFormLabel } from '@chakra-ui/react';

import type { FormLabelProps } from './types';

export const FormLabel: React.FC<FormLabelProps> = ({ children, htmlFor, as }) => {
	return (
		<ChakraFormLabel as={as} className='ee-form__label' htmlFor={htmlFor}>
			{children}
		</ChakraFormLabel>
	);
};
