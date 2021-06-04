import { __ } from '@eventespresso/i18n';

import { TextInputWithLabel } from '../../../text-input';
import type { FormElementProps } from '../../types';
import FieldOptions from './FieldOptions';
import { FIELDS_WITH_OPTIONS } from '../../constants';
import { useUpdateElement } from '../useUpdateElement';

export const Settings: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			<TextInputWithLabel
				label={__('admin label')}
				onChangeValue={onChangeValue('adminLabel')}
				value={element.adminLabel}
			/>
			<TextInputWithLabel
				label={__('public label')}
				onChangeValue={onChangeValue('publicLabel')}
				value={element.publicLabel}
			/>
			{FIELDS_WITH_OPTIONS.includes(element.type) && <FieldOptions element={element} label={__('options')} />}
			<TextInputWithLabel
				label={__('placeholder')}
				onChangeValue={onChangeValue('placeholder')}
				value={element.placeholder}
			/>
			<TextInputWithLabel
				label={__('help text')}
				onChangeValue={onChangeValue('helpText')}
				value={element.helpText}
			/>
		</>
	);
};
