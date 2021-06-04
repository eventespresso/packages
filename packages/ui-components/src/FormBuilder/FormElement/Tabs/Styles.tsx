import { __ } from '@eventespresso/i18n';

import { TextInputWithLabel } from '../../../text-input';
import { TextareaWithLabel } from '../../../Textarea';
import { useUpdateElement } from '../useUpdateElement';

import type { FormElementProps } from '../../types';

export const Styles: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			<TextInputWithLabel
				label={__('label css class')}
				onChangeValue={onChangeValue('labelClass')}
				value={element.labelClass}
			/>
			<TextInputWithLabel
				label={__('input css class')}
				onChangeValue={onChangeValue('inputClass')}
				value={element.inputClass}
			/>
			<TextInputWithLabel
				label={__('help text css class')}
				onChangeValue={onChangeValue('helpClass')}
				value={element.helpClass}
			/>
			<TextareaWithLabel
				label={__('custom css')}
				onChangeValue={onChangeValue('customCss')}
				value={element.customCss}
			/>
		</>
	);
};
