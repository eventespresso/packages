import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Copy, DragHandle, SettingsOutlined, Trash } from '@eventespresso/icons';

import { IconButton } from '../../Button';
import { useFormState } from '../state';
import { SaveSection } from './SaveSection';

import type { FormSectionProps } from '../types';

export const FormSectionToolbar: React.FC<FormSectionProps> = ({ formSection }) => {
	const { copySection, deleteSection, isElementOpen, toggleOpenElement } = useFormState();

	const active = isElementOpen(formSection.UUID);

	const onCopy = useCallback(() => copySection(formSection.UUID), [copySection, formSection.UUID]);
	const onDelete = useCallback(() => deleteSection(formSection.UUID), [deleteSection, formSection.UUID]);
	const onToggle = useCallback(() => toggleOpenElement(formSection.UUID), [formSection.UUID, toggleOpenElement]);

	const tabIndex = active ? 0 : -1;

	return (
		<div className={'ee-form-section__toolbar'}>
			<div className='ee-form-section__toolbar-actions'>
				<IconButton
					icon={SettingsOutlined}
					active={active}
					borderless
					className='ee-form-section__menu-button'
					onClick={onToggle}
					size='smaller'
					tooltip={__('form section settings')}
					transparentBg
				/>
				<IconButton
					icon={Copy}
					borderless
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
					onClick={onDelete}
					size='small'
					tabIndex={tabIndex}
					tooltip={__('delete form section')}
					transparentBg
				/>
				<IconButton
					icon={DragHandle}
					borderless
					className='ee-drag-handle'
					size='small'
					tabIndex={tabIndex}
					tooltip={__('click, hold, and drag to reorder form section')}
					transparentBg
				/>
			</div>
		</div>
	);
};
