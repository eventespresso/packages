import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Copy, DragHandle, SettingsOutlined, Trash } from '@eventespresso/icons';

import { IconButton } from '../../Button';
import { ELEMENT_BLOCKS_INDEXED } from '../constants';
import { useFormState } from '../state';

import type { FormElementToolbarProps } from '../types';

export const FormElementToolbar: React.FC<FormElementToolbarProps> = ({ element, dragHandleProps }) => {
	const { copyElement, deleteElement, isElementOpen, toggleOpenElement } = useFormState();
	const { UUID } = element;
	const active = isElementOpen({ UUID });
	const elementTypeLabel = ELEMENT_BLOCKS_INDEXED[element.type]?.label || '';

	const onCopy = useCallback(() => copyElement({ UUID }), [UUID, copyElement]);
	const onDelete = useCallback(() => deleteElement({ UUID }), [UUID, deleteElement]);
	const onToggle = useCallback(() => toggleOpenElement({ openElement: UUID }), [UUID, toggleOpenElement]);

	const tabIndex = active ? 0 : -1;

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
				<IconButton
					icon={Trash}
					borderless
					className='ee-form-element__toolbar-button'
					size='smaller'
					onClick={onDelete}
					tabIndex={tabIndex}
					tooltip={__('delete form element')}
					transparentBg
				/>
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
};
