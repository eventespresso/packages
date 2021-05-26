import { FormControl } from '@eventespresso/adapters';

import { MappedElement } from './MappedElement';
import type { FormElementProps } from '../types';

export const FormElementInput: React.FC<FormElementProps> = ({ element, sectionId }) => {
	return (
		<FormControl className='ee-form-element__input' isRequired={element.required}>
			<MappedElement sectionId={sectionId} element={element} />
		</FormControl>
	);
};
