import { __ } from '@eventespresso/i18n';

import type { FormElementProps } from '../../types';
import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';

const TextWithLabel = withLabel(TextInput);

export const Settings: React.FC<FormElementProps> = ({ element }) => {
	return (
		// TODO wire up the values from data state
		<>
			<TextWithLabel label={__('admin label')} defaultValue={element.adminLabel} />
			<TextWithLabel label={__('public label')} defaultValue={element.publicLabel} />
			<TextWithLabel label={__('placeholder')} defaultValue={element.placeholder} />
			<TextWithLabel label={__('help text')} defaultValue={element.helpText} />
		</>
	);
};