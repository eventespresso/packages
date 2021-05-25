import { __ } from '@eventespresso/i18n';
import { TextInput, withLabel, Textarea, Switch } from '@eventespresso/ui-components';

import type { SettingsProps } from '../../types';

const Input = withLabel(TextInput);
const TextAreaWithLabel = withLabel(Textarea);

export const Settings: React.FC<SettingsProps> = ({ formSection }) => {
	return (
		// TODO wire up the values from data state
		<>
			<Input label={__('name')} defaultValue={formSection.name} />
			<Switch label={__('show name')} defaultChecked={formSection.showName} />
			<TextAreaWithLabel label={__('description')} defaultValue={formSection.description} />
			<Switch label={__('show description')} defaultChecked={formSection.showDescription} />
		</>
	);
};
