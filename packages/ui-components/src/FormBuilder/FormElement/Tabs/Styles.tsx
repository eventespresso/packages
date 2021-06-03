import { __ } from '@eventespresso/i18n';

import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';
import { Textarea } from '../../../Textarea';
import { useUpdateElement } from '../useUpdateElement';

import type { FormElementProps } from '../../types';

const TextWithLabel = withLabel(TextInput);
const TextAreaWithLabel = withLabel(Textarea);

export const Styles: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			<TextWithLabel
				label={__('label css class')}
				onChangeValue={onChangeValue('labelClass')}
				value={element.labelClass}
			/>
			<TextWithLabel
				label={__('input css class')}
				onChangeValue={onChangeValue('inputClass')}
				value={element.inputClass}
			/>
			<TextWithLabel
				label={__('help text css class')}
				onChangeValue={onChangeValue('helpClass')}
				value={element.helpClass}
			/>
			<TextAreaWithLabel
				label={__('custom css')}
				onChangeValue={onChangeValue('customCss')}
				value={element.customCss}
			/>
		</>
	);
};
