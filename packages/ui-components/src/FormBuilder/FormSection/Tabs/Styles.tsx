import { __ } from '@eventespresso/i18n';

import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';
import { Textarea } from '../../../Textarea';
import { useUpdateSection } from '../useUpdateSection';

import type { FormSectionProps } from '../../types';

const Input = withLabel(TextInput);
const TextAreaWithLabel = withLabel(Textarea);

export const Styles: React.FC<FormSectionProps> = ({ formSection }) => {
	const onChangeValue = useUpdateSection(formSection);

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
