import { __ } from '@eventespresso/i18n';

import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';
import { Textarea } from '../../../Textarea';

import type { SettingsProps } from '../../types';

const Input = withLabel(TextInput);
const TextAreaWithLabel = withLabel(Textarea);

export const Styles: React.FC<SettingsProps> = ({ formSection }) => {
	return (
		// TODO wire up the values from data state
		<>
			<Input label={__('css class')} defaultValue={formSection.htmlClass} />
			<TextAreaWithLabel label={__('custom css')} defaultValue={formSection.customCss} />
		</>
	);
};
