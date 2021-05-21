import { FormControl } from '@eventespresso/adapters';

import { MappedElement } from './MappedElement';
import type { FormElementProps } from './types';

export const FormElementInput: React.FC<FormElementProps> = ({ element }) => {
	return (
		<FormControl className='ee-form-element__input' isRequired={element.required}>
			<MappedElement element={element} />
		</FormControl>
	);
};