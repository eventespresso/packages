import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';
import type { FormElement, SettingsProps } from '../../types';
import { useFormState } from '../../state';

const TextWithLabel = withLabel(TextInput);

export const Settings: React.FC<SettingsProps> = ({ element }) => {
	const { updateElement } = useFormState();

	const onChangeValue = useCallback(
		(field: keyof FormElement) => (value) => {
			updateElement(element.UUID, { [field]: value });
		},
		[element.UUID, updateElement]
	);
	return (
		<>
			<TextWithLabel
				label={__('admin label')}
				onChangeValue={onChangeValue('adminLabel')}
				value={element.adminLabel}
			/>
			<TextWithLabel
				label={__('public label')}
				onChangeValue={onChangeValue('publicLabel')}
				value={element.publicLabel}
			/>
			<TextWithLabel
				label={__('placeholder')}
				onChangeValue={onChangeValue('placeholder')}
				value={element.placeholder}
			/>
			<TextWithLabel label={__('help text')} onChangeValue={onChangeValue('helpText')} value={element.helpText} />
		</>
	);
};
