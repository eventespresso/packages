import { memo, useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { Copy, DragHandle, SettingsOutlined, Trash } from '@eventespresso/icons';
import { IconButton, ButtonProps, ConfirmDelete } from '@eventespresso/ui-components';
import { getPropsAreEqual } from '@eventespresso/utils';

import { ELEMENT_BLOCKS_INDEXED } from '../constants';
import { useFormState } from '../state';

import type { FormElementToolbarProps } from '../types';

export const FormElementToolbar = memo<FormElementToolbarProps>(({ element, dragHandleProps }) => {
	const { copyElement, deleteElement, isElementOpen, toggleOpenElement } = useFormState();
	const { id } = element;
	const active = isElementOpen({ id });
	const elementTypeLabel = ELEMENT_BLOCKS_INDEXED[element.type]?.label || '';

	const onCopy = useCallback(() => copyElement({ id }), [id, copyElement]);
	const onDelete = useCallback(() => deleteElement({ id }), [id, deleteElement]);
	const onToggle = useCallback(() => toggleOpenElement({ openElement: id }), [id, toggleOpenElement]);

	const tabIndex = active ? 0 : -1;

	const deleteButtonProps = useMemo<ButtonProps>(
		() => ({
			icon: Trash,
			borderless: true,
			className: 'ee-form-element__toolbar-button',
			size: 'smaller',
			tabIndex,
			tooltip: __('delete form element'),
			transparentBg: true,
		}),
		[tabIndex]
	);

	return (
		<div className='ee-form-element__toolbar'>
			<div className='ee-form-element__type'>{elementTypeLabel}</div>
			<div className='ee-form-element__toolbar-actions'>
				<IconButton
					active={active}
					borderless
					className='ee-form-element__menu-button ee-form-element__toolbar-button'
					icon={SettingsOutlined}
					onClick={onToggle}
					size='small'
					tooltip={__('form element settings')}
					transparentBg
				/>
				<IconButton
					icon={Copy}
					borderless
					className='ee-form-element__toolbar-button'
					size='smaller'
					onClick={onCopy}
					tabIndex={tabIndex}
					tooltip={__('copy form element')}
					transparentBg
				/>
				<ConfirmDelete asIconButton onConfirm={onDelete} buttonProps={deleteButtonProps} />
				<IconButton
					icon={DragHandle}
					borderless
					className='ee-drag-handle ee-form-element__toolbar-button'
					size='smaller'
					tabIndex={tabIndex}
					tooltip={__('click, hold, and drag to reorder form element')}
					transparentBg
					{...dragHandleProps}
				/>
			</div>
		</div>
	);
}, getPropsAreEqual([['element']]));
