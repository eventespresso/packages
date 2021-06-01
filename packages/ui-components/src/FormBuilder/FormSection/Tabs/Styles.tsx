import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';
import { Textarea } from '../../../Textarea';

import type { FormSection, SettingsProps } from '../../types';
import { useFormState } from '../../state';

const Input = withLabel(TextInput);
const TextAreaWithLabel = withLabel(Textarea);

export const Styles: React.FC<SettingsProps> = ({ formSection }) => {
	const { updateSection } = useFormState();

	const onChangeValue = useCallback(
		(field: keyof FormSection) => (value) => {
			updateSection({ UUID: formSection.UUID, section: { [field]: value } });
		},
		[formSection.UUID, updateSection]
	);
	return (
		<>
			<Input label={__('css class')} onChangeValue={onChangeValue('htmlClass')} value={formSection.htmlClass} />
			<TextAreaWithLabel
				label={__('custom css')}
				onChangeValue={onChangeValue('customCss')}
				value={formSection.customCss}
			/>
		</>
	);
};
