import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Copy, DragHandle, SettingsOutlined, Trash } from '@eventespresso/icons';

import { IconButton } from '../../Button';
import { useFormState } from '../state';
import { SaveSection } from './SaveSection';

import type { FormSectionToolbarProps } from '../types';

export const FormSectionToolbar: React.FC<FormSectionToolbarProps> = ({ formSection, dragHandleProps }) => {
	const { copySection, deleteSection, isElementOpen, toggleOpenElement } = useFormState();

	const { UUID } = formSection;
	const active = isElementOpen({ UUID });

	const onCopy = useCallback(() => copySection({ UUID }), [UUID, copySection]);
	const onDelete = useCallback(() => deleteSection({ UUID }), [UUID, deleteSection]);
	const onToggle = useCallback(() => toggleOpenElement({ openElement: UUID }), [UUID, toggleOpenElement]);

	const tabIndex = active ? 0 : -1;

	return (
		<div className={'ee-form-section__toolbar'}>
			<div className='ee-form-section__toolbar-actions'>
				<IconButton
					icon={SettingsOutlined}
					active={active}
					borderless
					className='ee-form-section__menu-button ee-form-section__toolbar-button'
					onClick={onToggle}
					size='smaller'
					tooltip={__('form section settings')}
					transparentBg
				/>
				<IconButton
					icon={Copy}
					borderless
					className='ee-form-section__toolbar-button'
					onClick={onCopy}
					size='smaller'
					tabIndex={tabIndex}
					tooltip={__('copy form section')}
					transparentBg
				/>
				<SaveSection formSection={formSection} />
				<IconButton
					icon={Trash}
					borderless
					className='ee-form-section__toolbar-button'
					onClick={onDelete}
					size='small'
					tabIndex={tabIndex}
					tooltip={__('delete form section')}
					transparentBg
				/>
				<IconButton
					icon={DragHandle}
					borderless
					className='ee-drag-handle ee-form-section__toolbar-button'
					size='small'
					tabIndex={tabIndex}
					tooltip={__('click, hold, and drag to reorder form section')}
					transparentBg
					{...dragHandleProps}
				/>
			</div>
		</div>
	);
};
