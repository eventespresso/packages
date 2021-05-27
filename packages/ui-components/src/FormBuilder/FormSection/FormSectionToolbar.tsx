import { useCallback } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { Copy, DragHandle, Save, Trash } from '@eventespresso/icons';

import { IconButton } from '../../Button';
import { useFormState } from '../state';

import type { FormSectionProps } from '../types';

export const FormSectionToolbar: React.FC<FormSectionProps> = ({ formSection }) => {
	const { isElementOpen, deleteSection, copySection } = useFormState();

	const active = isElementOpen(formSection.UUID);

	const onDelete = useCallback(() => deleteSection(formSection.UUID), [deleteSection, formSection.UUID]);
	const onCopy = useCallback(() => copySection(formSection.UUID), [copySection, formSection.UUID]);

	const toolbarClass = classNames(
		'ee-form-section__toolbar',
		'ee-form-section_toolbar__actions',
		active && 'ee-form-section__toolbar--active'
	);

	return (
		active && (
			<div className={toolbarClass}>
				<div className='ee-form-section__toolbar-item ee-form-section__toolbar-item--align-end'>
					<IconButton
						icon={Copy}
						borderless
						size='smaller'
						onClick={onCopy}
						tooltip={__('click to copy this form section')}
						transparentBg
					/>
					<IconButton
						icon={Save}
						borderless
						size='smaller'
						// onClick={onSave}
						tooltip={__('click to save this form section for use in other forms')}
						transparentBg
					/>
					<IconButton
						icon={Trash}
						borderless
						onClick={onDelete}
						size='small'
						tooltip={__('click to delete this form section')}
						transparentBg
					/>
					<IconButton
						icon={DragHandle}
						borderless
						className='ee-drag-handle'
						size='small'
						tooltip={__('click, hold, and drag to reorder this form section')}
						transparentBg
					/>
				</div>
			</div>
		)
	);
};
