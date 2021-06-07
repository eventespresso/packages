import { useCallback } from 'react';
import classNames from 'classnames';
import { adjust, assoc, move, remove } from 'ramda';

import { __ } from '@eventespresso/i18n';
import { Plus } from '@eventespresso/icons';
import { DragDropContext, Droppable, DragDropContextProps as DnDProps } from '@eventespresso/adapters';
import { Button, withLabel } from '@eventespresso/ui-components';

import { FieldOption } from './FieldOption';
import { FormElementProps } from '../../types';
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

	const droppableId = `ee-field-option-${element.UUID}`;

	const handleDnD = useCallback<DnDProps['onDragEnd']>(
		({ destination, source }) => {
			const noDestination = !destination;
			const noChange = source?.index === destination?.index && destination?.droppableId === source?.droppableId;
			const notOfOurInterest = destination?.droppableId !== droppableId;

			if (noDestination || noChange || notOfOurInterest) {
				return;
			}
			const newOptions = move(source.index, destination.index, element.options || []);
			updateElement('options')(newOptions);
		},
		[droppableId, element.options, updateElement]
	);

	return (
		<div className='ee-field-options'>
			<p className='ee-field-options__desc'>
				{__('Options are the choices you give people to select from.')}
				<br />
				{__(
					'The value is a simple key that will be saved to the database and the label is what is shown to the user.'
				)}
			</p>
			<DragDropContext onDragEnd={handleDnD}>
				<Droppable droppableId={droppableId} type='option'>
					{({ innerRef, droppableProps, placeholder }, { isDraggingOver }) => {
						const className = classNames(
							'ee-droppable',
							isDraggingOver && 'ee-droppable--is-dragging-over'
						);
						return (
							<div {...droppableProps} className={className} ref={innerRef}>
								{(element.options || []).map(({ value, label }, index) => {
									return (
										<FieldOption
											key={`${index}`}
											index={index}
											label={label}
											onChange={onChangeOptionInput}
											onRemove={onRemoveOption}
											UUID={element.UUID}
											value={value}
										/>
									);
								})}
								{placeholder}
							</div>
						);
					}}
				</Droppable>
			</DragDropContext>
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
