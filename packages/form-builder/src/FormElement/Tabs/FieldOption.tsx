import { useMemo } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { Draggable } from '@eventespresso/adapters';
import { DragHandle, Trash } from '@eventespresso/icons';
import { ConfirmDelete, Label, TextInput, ButtonProps, IconButton } from '@eventespresso/ui-components';

import { FieldOptionProps } from '../../types';

export const FieldOption: React.FC<FieldOptionProps> = ({ index, label, onChange, onRemove, id, value }) => {
	const hidden = index > 0;

	const removeButtonProps = useMemo<ButtonProps>(
		() => ({
			icon: Trash,
			borderless: true,
			className: 'ee-field-option__remove',
			size: 'small',
			tooltip: __('remove option'),
			transparentBg: true,
		}),
		[]
	);

	return (
		<Draggable draggableId={`ee-field-option-${id}-${index}`} index={index}>
			{({ draggableProps, dragHandleProps, innerRef }, { isDragging }) => {
				const className = classNames(
					'ee-field-option__wrapper',
					'ee-draggable',
					isDragging && 'ee-draggable--is-dragging'
				);
				return (
					<div {...draggableProps} {...dragHandleProps} key={`${index}`} ref={innerRef} className={className}>
						<div className='ee-field-option'>
							<Label id={`ee-field-option-value-${index}`} label={__('value')} hidden={hidden} />
							<TextInput
								className='ee-field-option__value'
								id={`ee-field-option-value-${index}`}
								onChangeValue={onChange('value', index)}
								placeholder={__('value')}
								value={value}
							/>
						</div>
						<div className='ee-field-option'>
							<Label id={`ee-field-option-label-${index}`} label={__('label')} hidden={hidden} />
							<TextInput
								className='ee-field-option__label'
								id={`ee-field-option-label-${index}`}
								onChangeValue={onChange('label', index)}
								placeholder={__('label')}
								value={label as string}
							/>
						</div>
						<div className='ee-field-option ee-field-option__actions'>
							<ConfirmDelete asIconButton onConfirm={onRemove(index)} buttonProps={removeButtonProps} />
							<IconButton
								icon={DragHandle}
								borderless
								className='ee-field-option__drag ee-drag-handle'
								size='smaller'
								tooltip={__('click, hold, and drag to reorder field option')}
								transparentBg
								{...dragHandleProps}
							/>
						</div>
					</div>
				);
			}}
		</Draggable>
	);
};
