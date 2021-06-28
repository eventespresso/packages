import { __ } from '@eventespresso/i18n';
import { NumberInputWithLabel, SwitchWithLabel, TextInputWithLabel } from '@eventespresso/ui-components';

import { useUpdateElement } from '../useUpdateElement';

import type { FormElementProps, ElementType } from '../../types';

const numericFields: Array<ElementType> = ['INTEGER', 'DECIMAL'];

export const Validation: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			<SwitchWithLabel
				label={__('required')}
				onChangeValue={onChangeValue('required.required')}
				isChecked={element.required?.required}
			/>
			<TextInputWithLabel
				label={__('required text')}
				onChangeValue={onChangeValue('required.validationText')}
				value={element.required?.validationText}
			/>
			{numericFields.includes(element.type) && (
				<>
					<NumberInputWithLabel
						label={__('min')}
						onChangeValue={onChangeValue('attributes.min')}
						value={element.attributes?.min}
					/>
					<NumberInputWithLabel
						label={__('max')}
						onChangeValue={onChangeValue('attributes.max')}
						value={element.attributes?.max}
					/>
				</>
			)}
		</>
	);
};
