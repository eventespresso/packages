import { __ } from '@eventespresso/i18n';

import { TextInput } from '../../../text-input';
import { NumberInput } from '../../../NumberInput';
import { withLabel } from '../../../withLabel';
import { Switch } from '../../../Switch';

import type { FormElementProps, ElementType } from '../../types';

const TextWithLabel = withLabel(TextInput);
const NumberWithLabel = withLabel(NumberInput);

const numericFields: Array<ElementType> = ['integer', 'decimal'];

export const Validation: React.FC<FormElementProps> = ({ element }) => {
	return (
		// TODO wire up the values from data state
		<>
			<Switch label={__('required')} defaultChecked={element.required} />
			<TextWithLabel label={__('required text')} defaultValue={element.requiredText} />
			{numericFields.includes(element.type) && (
				<>
					<NumberWithLabel label={__('min')} defaultValue={element.min} />
					<NumberWithLabel label={__('max')} defaultValue={element.max} />
				</>
			)}
		</>
	);
};
