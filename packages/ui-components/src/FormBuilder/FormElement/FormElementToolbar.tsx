import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Copy, DragHandle, Save, SettingsOutlined, Trash } from '@eventespresso/icons';

import { IconButton } from '../../Button';
import { ELEMENT_BLOCKS_INDEXED } from '../constants';
import { useFormState } from '../state';

import type { FormElementProps } from '../types';

export const FormElementToolbar: React.FC<FormElementProps> = ({ element }) => {
	const { copyElement, deleteElement, isElementOpen, toggleOpenElement } = useFormState();

	const active = isElementOpen(element.UUID);
	const elementTypeLabel = ELEMENT_BLOCKS_INDEXED[element.type]?.label || '';

	const onCopy = useCallback(() => copyElement(element.UUID), [copyElement, element.UUID]);
	const onDelete = useCallback(() => deleteElement(element.UUID), [deleteElement, element.UUID]);
	const onToggle = useCallback(() => toggleOpenElement(element.UUID), [element.UUID, toggleOpenElement]);

	const tabIndex = active ? 0 : -1;

	return (
		<div className='ee-form-element__toolbar'>
			<div className='ee-form-element__type'>{elementTypeLabel}</div>
			<div className='ee-form-element__toolbar-actions'>
				<IconButton
					active={active}
					borderless
					className='ee-form-element__menu-button'
					icon={SettingsOutlined}
					onClick={onToggle}
					size='small'
					tooltip={__('form element settings')}
					transparentBg
				/>
				<IconButton
					icon={Copy}
					borderless
					size='smaller'
					onClick={onCopy}
					tabIndex={tabIndex}
					tooltip={__('copy form element')}
					transparentBg
				/>
				<IconButton
					icon={Save}
					borderless
					size='smaller'
					// onClick={onSave}
					tabIndex={tabIndex}
					tooltip={__('save form element for use in other forms')}
					transparentBg
				/>
				<IconButton
					icon={Trash}
					borderless
					size='smaller'
					onClick={onDelete}
					tabIndex={tabIndex}
					tooltip={__('delete form element')}
					transparentBg
				/>
				<IconButton
					icon={DragHandle}
					borderless
					className='ee-drag-handle'
					size='smaller'
					tabIndex={tabIndex}
					tooltip={__('click, hold, and drag to reorder form element')}
					transparentBg
				/>
			</div>
		</div>
	);
};
