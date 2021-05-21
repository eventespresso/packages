import { __ } from '@eventespresso/i18n';

import type { FormElementProps } from '../../types';

import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';

const Input = withLabel(TextInput);

export const Settings: React.FC<FormElementProps> = ({ element }) => {
	return (
		// TODO wire up the values from data state
		<>
			<Input label={__('admin label')} defaultValue={element.adminLabel} />
			<Input label={__('public label')} defaultValue={element.publicLabel} />
			<Input label={__('placeholder')} defaultValue={element.placeholder} />
			<Input label={__('help text')} defaultValue={element.helpText} />
		</>
	);
};
