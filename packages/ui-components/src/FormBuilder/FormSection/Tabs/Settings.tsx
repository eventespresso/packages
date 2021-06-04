import { __ } from '@eventespresso/i18n';

import { TextInputWithLabel } from '../../../text-input';
import { SwitchWithLabel } from '../../../Switch';
import { useUpdateSection } from '../useUpdateSection';

import type { FormSectionProps } from '../../types';

export const Settings: React.FC<FormSectionProps> = ({ formSection }) => {
	const onChangeValue = useUpdateSection(formSection);

	return (
		<>
			<TextInputWithLabel label={__('name')} onChangeValue={onChangeValue('name')} value={formSection.name} />
			<TextInputWithLabel
				label={__('admin label')}
				onChangeValue={onChangeValue('adminLabel')}
				value={formSection.adminLabel}
			/>
			<SwitchWithLabel
				label={__('show name')}
				onChangeValue={onChangeValue('showName')}
				isChecked={formSection.showName}
			/>
		</>
	);
};
