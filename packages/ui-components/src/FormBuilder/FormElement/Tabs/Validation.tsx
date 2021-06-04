import { __ } from '@eventespresso/i18n';

import { TextInputWithLabel } from '../../../text-input';
import { NumberInputWithLabel } from '../../../NumberInput';
import { SwitchWithLabel } from '../../../Switch';
import { useUpdateElement } from '../useUpdateElement';

import type { FormElementProps, ElementType } from '../../types';

const numericFields: Array<ElementType> = ['integer', 'decimal'];

export const Validation: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			<SwitchWithLabel
				label={__('required')}
				onChangeValue={onChangeValue('required')}
				isChecked={element.required}
			/>
			<TextInputWithLabel
				label={__('required text')}
				onChangeValue={onChangeValue('requiredText')}
				value={element.requiredText}
			/>
			{numericFields.includes(element.type) && (
				<>
					<NumberInputWithLabel label={__('min')} onChangeValue={onChangeValue('min')} value={element.min} />
					<NumberInputWithLabel label={__('max')} onChangeValue={onChangeValue('max')} value={element.max} />
				</>
			)}
		</>
	);
};
