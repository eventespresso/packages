import { __ } from '@eventespresso/i18n';
import { TextInput, withLabel, Textarea } from '@eventespresso/ui-components';

import type { SettingsProps } from '../../types';

const TextWithLabel = withLabel(TextInput);
const TextAreaWithLabel = withLabel(Textarea);

export const Styles: React.FC<SettingsProps> = ({ element }) => {
	return (
		// TODO wire up the values from data state
		<>
			<TextWithLabel label={__('label css class')} defaultValue={element.labelClass} />
			<TextWithLabel label={__('input css class')} defaultValue={element.inputClass} />
			<TextWithLabel label={__('help text css class')} defaultValue={element.helpClass} />
			<TextAreaWithLabel label={__('custom css')} defaultValue={element.customCss} />
		</>
	);
};
