import { useCallback, useState } from 'react';

import { __ } from '@eventespresso/i18n';

import { FormElementProps } from '../../types';
import { Textarea } from '../../../Textarea';
import { withLabel } from '../../../withLabel';
import { useUpdateElement } from '../useUpdateElement';

const TextAreaWithLabel = withLabel(Textarea);

export const FieldOptions: React.FC<FormElementProps> = ({ element }) => {
	const [currentValue, setCurrentValue] = useState(() => {
		// Convert options array to multiline string
		return (element.options || []).reduce((prev, cur) => `${prev}\n${cur.value}`, '').trim();
	});
	const updateElement = useUpdateElement(element);

	const updateValue = useCallback(() => {
		// Split the given string by new line to create an option from each line
		const options = currentValue
			.trim()
			.split(/[\n\r]/)
			.map((value) => ({ value, label: value }));

		updateElement('options')(options);
	}, [currentValue, updateElement]);

	return (
		<>
			<TextAreaWithLabel
				aria-describedby={`${element.UUID}-options-desc`}
				id={`${element.UUID}-options`}
				label={__('options')}
				onBlur={updateValue}
				onChangeValue={setCurrentValue}
				placeholder={`Apple\nBanana\nMango`}
				value={currentValue}
				rows={10}
			/>
			<p id={`${element.UUID}-options-desc`}>{__('value on each line will become an option for the input.')}</p>
		</>
	);
};
