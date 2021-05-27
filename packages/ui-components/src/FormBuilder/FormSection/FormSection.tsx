import { useCallback } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { More } from '@eventespresso/icons';

import { IconButton } from '../../Button';
import { FormElement } from '../FormElement';
import { FormSectionSidebar } from './FormSectionSidebar';
import { FormSectionToolbar } from './FormSectionToolbar';
import { FormSectionTabs } from './Tabs';
import { useFormState } from '../state';

import type { FormSectionProps } from '../types';

export const FormSection: React.FC<FormSectionProps> = ({ formSection }) => {
	const { isElementOpen, toggleOpenElement, getElements } = useFormState();

	const active = isElementOpen(formSection.UUID);
	const fieldsetClass = classNames('ee-form-section', active && 'ee-form-section--active');

	const onToggle = useCallback(() => toggleOpenElement(formSection.UUID), [formSection.UUID, toggleOpenElement]);

	return (
		<fieldset className={fieldsetClass}>
			<div className={'ee-form-section__wrapper'}>
				<h4 className='ee-form-section__name'>{formSection.adminLabel || formSection.name}</h4>
				<IconButton
					active={active}
					borderless
					className='ee-form-section__menu-button'
					icon={More}
					onClick={onToggle}
					size='small'
					tooltip={__('click to view form section toolbar and settings')}
					transparentBg
				/>
				<FormSectionToolbar formSection={formSection} />
			</div>
			<FormSectionTabs formSection={formSection} />
			{getElements(formSection.UUID).map((element) => (
				<FormElement key={element.UUID} element={element} />
			))}
			<FormSectionSidebar formSection={formSection} />
		</fieldset>
	);
};
