import { __ } from '@eventespresso/i18n';
import { TextInputWithLabel, NumberInputWithLabel } from '@eventespresso/ui-components';

import { useUpdateElement } from '../useUpdateElement';

import type { FormElementProps } from '../../types';
import { isNumericField, isTextField } from '../../utils';

export const Styles: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			<TextInputWithLabel
				label={__('css class')}
				onChangeValue={onChangeValue('attributes.class')}
				value={element.attributes?.class}
			/>
			<TextInputWithLabel
				label={__('help text css class')}
				onChangeValue={onChangeValue('helpText.htmlClass')}
				value={element.helpText?.htmlClass}
			/>
			{isTextField(element) && (
				<>
					<NumberInputWithLabel
						label={__('size')}
						onChangeValue={onChangeValue('attributes.size')}
						value={element.attributes?.size}
					/>
					{
						// Show 'step' for numeric fields and `maxlength` for other fields
						isNumericField(element) ? (
							<NumberInputWithLabel
								label={__('step')}
								onChangeValue={onChangeValue('attributes.step')}
								value={element.attributes?.step}
							/>
						) : (
							<NumberInputWithLabel
								label={__('maxlength')}
								onChangeValue={onChangeValue('attributes.maxlength')}
								value={element.attributes?.maxlength}
							/>
						)
					}
				</>
			)}
		</>
	);
};
