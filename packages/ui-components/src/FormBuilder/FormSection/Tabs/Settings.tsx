import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';
import { Switch } from '../../../Switch';

import type { SettingsProps, FormSection } from '../../types';
import { useFormState } from '../../state';

const TextWithLabel = withLabel(TextInput);

export const Settings: React.FC<SettingsProps> = ({ formSection }) => {
	const { updateSection } = useFormState();

	const onChangeValue = useCallback(
		(field: keyof FormSection) => (value) => {
			updateSection(formSection.UUID, { [field]: value });
		},
		[formSection.UUID, updateSection]
	);

	return (
		<>
			<TextWithLabel label={__('name')} onChangeValue={onChangeValue('name')} value={formSection.name} />
			<TextWithLabel
				label={__('admin label')}
				onChangeValue={onChangeValue('adminLabel')}
				value={formSection.adminLabel}
			/>
			<Switch
				label={__('show name')}
				onChangeValue={onChangeValue('showName')}
				isChecked={formSection.showName}
			/>
		</>
	);
};
