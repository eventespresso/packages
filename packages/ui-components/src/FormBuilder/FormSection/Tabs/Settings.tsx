import { __ } from '@eventespresso/i18n';

import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';
import { Switch } from '../../../Switch';
import { useUpdateSection } from '../useUpdateSection';

import type { FormSectionProps } from '../../types';

const TextWithLabel = withLabel(TextInput);

export const Settings: React.FC<FormSectionProps> = ({ formSection }) => {
	const onChangeValue = useUpdateSection(formSection);

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
