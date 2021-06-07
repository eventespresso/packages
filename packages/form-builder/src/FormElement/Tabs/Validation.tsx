import { __ } from '@eventespresso/i18n';
import { NumberInputWithLabel, SwitchWithLabel, TextInputWithLabel } from '@eventespresso/ui-components';

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
