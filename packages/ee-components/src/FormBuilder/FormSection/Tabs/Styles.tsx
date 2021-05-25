import { __ } from '@eventespresso/i18n';
import { TextInput, withLabel, Textarea } from '@eventespresso/ui-components';

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
