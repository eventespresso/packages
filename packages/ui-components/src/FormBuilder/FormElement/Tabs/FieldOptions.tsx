import { useCallback, CSSProperties } from 'react';
import { adjust, assoc, remove } from 'ramda';

import { __ } from '@eventespresso/i18n';
import { Trash, Plus } from '@eventespresso/icons';

import { FormElementProps } from '../../types';
import { TextInput } from '../../../text-input';
import { withLabel } from '../../../withLabel';
import { IconButton } from '../../../Button';
import { useUpdateElement } from '../useUpdateElement';

const inputRowStyles: CSSProperties = {
	display: 'flex',
};

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
		<>
			<div>
				{(element.options || []).map(({ value, label }, index) => {
					return (
						<div key={`${index}`} style={inputRowStyles}>
							<TextInput
								onChangeValue={onChangeOptionInput('value', index)}
								value={value}
								placeholder={__('value')}
							/>
							<TextInput
								onChangeValue={onChangeOptionInput('label', index)}
								value={label as string}
								placeholder={__('label')}
							/>
							<IconButton aria-label={__('remove option')} icon={Trash} onClick={onRemoveOption(index)} />
						</div>
					);
				})}
				<IconButton aria-label={__('add option')} icon={Plus} onClick={onAddOption} />
			</div>
			<p className='ee-field-options__desc'>
				{__(
					'Options are the choices you give people to select from. The value is a simple key that will be saved to the database and the label is what is shown to the user.'
				)}
			</p>
		</>
	);
};

export default withLabel(FieldOptions);
