import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';
import { Textarea } from '../../../Textarea';
import { useFormState } from '../../state';

import type { FormElement, SettingsProps } from '../../types';

const TextWithLabel = withLabel(TextInput);
const TextAreaWithLabel = withLabel(Textarea);

export const Styles: React.FC<SettingsProps> = ({ element }) => {
	const { updateElement } = useFormState();

	const onChangeValue = useCallback(
		(field: keyof FormElement) => (value) => {
			updateElement({ UUID: element.UUID, element: { [field]: value } });
		},
		[element.UUID, updateElement]
	);
	return (
		// TODO wire up the values from data state
		<>
			<TextWithLabel
				label={__('label css class')}
				onChangeValue={onChangeValue('labelClass')}
				value={element.labelClass}
			/>
			<TextWithLabel
				label={__('input css class')}
				onChangeValue={onChangeValue('inputClass')}
				value={element.inputClass}
			/>
			<TextWithLabel
				label={__('help text css class')}
				onChangeValue={onChangeValue('helpClass')}
				value={element.helpClass}
			/>
			<TextAreaWithLabel
				label={__('custom css')}
				onChangeValue={onChangeValue('customCss')}
				value={element.customCss}
			/>
		</>
	);
};
