import { useCallback } from 'react';
import { adjust, assoc, remove } from 'ramda';

import { __ } from '@eventespresso/i18n';
import { Plus } from '@eventespresso/icons';

import { FieldOption } from './FieldOption';
import { FormElementProps } from '../../types';
import { withLabel } from '../../../withLabel';
import { Button } from '../../../Button';
import { useUpdateElement } from '../useUpdateElement';

const FieldOptions: React.FC<FormElementProps> = ({ element }) => {
	const updateElement = useUpdateElement(element);

	const onChangeOptionInput = useCallback(
		(key: 'value' | 'label', index: number) => (value: string) => {
			// if it's the 'value' field, accept only letters, numbers, underscore and hyphen
			const safeValue = key === 'value' ? value.replace(/[^\w-]/g, '') : value;
			// Update the option at specified index
			const newOptions = adjust(index, assoc(key, safeValue), element.options || []);
			updateElement('options')(newOptions);
		},
		[element.options, updateElement]
	);

	const onRemoveOption = useCallback(
		(index: number) => () => {
			const newOptions = remove(index, 1, element.options || []);
			updateElement('options')(newOptions);
		},
		[element.options, updateElement]
	);

	const onAddOption = useCallback(() => {
		const newOptions = [...(element.options || []), { value: '', label: '' }];
		updateElement('options')(newOptions);
	}, [element.options, updateElement]);

	return (
		<div className='ee-field-options'>
			<p className='ee-field-options__desc'>
				{__('Options are the choices you give people to select from.')}
				<br />
				{__(
					'The value is a simple key that will be saved to the database and the label is what is shown to the user.'
				)}
			</p>
			{(element.options || []).map(({ value, label }, index) => {
				return (
					<FieldOption
						key={`${index}`}
						index={index}
						label={label}
						onChange={onChangeOptionInput}
						onRemove={onRemoveOption}
						value={value}
					/>
				);
			})}
			<Button
				buttonText={__('add new option')}
				className='ee-field-options__add-option'
				icon={Plus}
				onClick={onAddOption}
				size='smaller'
			/>
		</div>
	);
};

export default withLabel(FieldOptions);
