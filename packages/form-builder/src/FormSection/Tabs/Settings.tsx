import { __ } from '@eventespresso/i18n';
import { TextInputWithLabel, SwitchWithLabel } from '@eventespresso/ui-components';

import { useUpdateSection } from '../useUpdateSection';

import type { FormSectionProps } from '../../types';

export const Settings: React.FC<FormSectionProps> = ({ formSection }) => {
	const onChangeValue = useUpdateSection(formSection);

	return (
		<>
			<TextInputWithLabel
				label={__('public label')}
				onChangeValue={onChangeValue('publicLabel')}
				value={formSection.publicLabel}
			/>
			<TextInputWithLabel
				label={__('admin label')}
				onChangeValue={onChangeValue('adminLabel')}
				value={formSection.adminLabel}
			/>
			<SwitchWithLabel
				label={__('show label')}
				onChangeValue={onChangeValue('showLabel')}
				isChecked={formSection.showLabel}
			/>
		</>
	);
};
