import { __ } from '@eventespresso/i18n';

import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';
import type { FormElementProps } from '../../types';
import FieldOptions from './FieldOptions';
import { FIELDS_WITH_OPTIONS } from '../../constants';
import { useUpdateElement } from '../useUpdateElement';

const TextWithLabel = withLabel(TextInput);

export const Settings: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			<TextWithLabel
				label={__('admin label')}
				onChangeValue={onChangeValue('adminLabel')}
				value={element.adminLabel}
			/>
			<TextWithLabel
				label={__('public label')}
				onChangeValue={onChangeValue('publicLabel')}
				value={element.publicLabel}
			/>
			{FIELDS_WITH_OPTIONS.includes(element.type) && <FieldOptions element={element} label={__('options')} />}
			<TextWithLabel
				label={__('placeholder')}
				onChangeValue={onChangeValue('placeholder')}
				value={element.placeholder}
			/>
			<TextWithLabel label={__('help text')} onChangeValue={onChangeValue('helpText')} value={element.helpText} />
		</>
	);
};
