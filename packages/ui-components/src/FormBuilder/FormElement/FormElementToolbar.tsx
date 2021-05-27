import { useCallback } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { DragHandle, Trash } from '@eventespresso/icons';

import { IconButton } from '../../Button';
import { ELEMENT_BLOCKS_INDEXED } from '../constants';
import { useFormState } from '../state';

import type { FormElementProps } from '../types';

export const FormElementToolbar: React.FC<FormElementProps> = ({ element, sectionId }) => {
	const { isElementOpen, deleteElement } = useFormState();

	const active = isElementOpen(element.UUID);

	const menuClass = classNames('ee-form-element__menu', active && 'ee-form-element__menu--active');

	const elementTypeLabel = ELEMENT_BLOCKS_INDEXED[element.type]?.label || '';

	const onDelete = useCallback(() => {
		deleteElement(sectionId, element.UUID);
	}, [deleteElement, element.UUID, sectionId]);

	const tools = active && (
		<>
			<div className='ee-form-element__type'>{elementTypeLabel}</div>
			<div className='ee-form-element__actions'>
				<IconButton
					icon={Trash}
					borderless
					size='smaller'
					onClick={onDelete}
					tooltip={__('click to delete this form section')}
					transparentBg
				/>
				<IconButton
					icon={DragHandle}
					borderless
					className='ee-drag-handle'
					size='smaller'
					tooltip={__('click, hold, and drag to reorder this form section')}
					transparentBg
				/>
			</div>
		</>
	);

	return <div className={menuClass}>{tools}</div>;
};
