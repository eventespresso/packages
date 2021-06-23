import { __ } from '@eventespresso/i18n';
import { TextInputWithLabel } from '@eventespresso/ui-components';

import { useUpdateSection } from '../useUpdateSection';

import type { FormSectionProps } from '../../types';

export const Styles: React.FC<FormSectionProps> = ({ formSection }) => {
	const onChangeValue = useUpdateSection(formSection);

	return (
		<TextInputWithLabel
			label={__('css class')}
			onChangeValue={onChangeValue('htmlClass')}
			value={formSection.htmlClass}
		/>
	);
};
