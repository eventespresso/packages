import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { TextInput } from '../../../text-input';
import { NumberInput } from '../../../NumberInput';
import { withLabel } from '../../../withLabel';
import { Switch } from '../../../Switch';
import { useFormState } from '../../state';

import type { SettingsProps, ElementType, FormElement } from '../../types';

const TextWithLabel = withLabel(TextInput);
const NumberWithLabel = withLabel(NumberInput);

const numericFields: Array<ElementType> = ['integer', 'decimal'];

export const Validation: React.FC<SettingsProps> = ({ element }) => {
	const { updateElement } = useFormState();

	const onChangeValue = useCallback(
		(field: keyof FormElement) => (value) => {
			updateElement({ UUID: element.UUID, element: { [field]: value } });
		},
		[element.UUID, updateElement]
	);
	return (
		<>
			<Switch label={__('required')} onChangeValue={onChangeValue('required')} isChecked={element.required} />
			<TextWithLabel
				label={__('required text')}
				onChangeValue={onChangeValue('requiredText')}
				value={element.requiredText}
			/>
			{numericFields.includes(element.type) && (
				<>
					<NumberWithLabel label={__('min')} onChangeValue={onChangeValue('min')} value={element.min} />
					<NumberWithLabel label={__('max')} onChangeValue={onChangeValue('max')} value={element.max} />
				</>
			)}
		</>
	);
};
