import classNames from 'classnames';
import { More } from '@eventespresso/icons';

import { IconButton } from '../../Button';
import { FormElement } from '../FormElement';
import { FormSectionToolbar } from './FormSectionToolbar';
import { FormSectionTabs } from './Tabs';

import type { FormSectionProps } from '../types';

export const FormSection: React.FC<FormSectionProps> = ({ formSection, isOpen, toggleElement }) => {
	const active = isOpen(formSection.UUID);
	const fieldsetClass = classNames('ee-form-section', active && 'ee-form-section--active');
	const formElements = formSection.elements.map((element, index) => (
		<FormElement key={index} element={element} isOpen={isOpen} toggleElement={toggleElement} />
	));
	return (
		<fieldset className={fieldsetClass}>
			<div className={'ee-form-section__wrapper'}>
				<h4 className='ee-form-section__name'>{formSection.adminLabel || formSection.name}</h4>
				<IconButton
					active={active}
					borderless
					className='ee-form-section__menu-button'
					icon={More}
					onClick={toggleElement(formSection.UUID)}
					size='small'
					transparentBg
				/>
				<FormSectionToolbar active={active} formSection={formSection} />
			</div>
			<FormSectionTabs formSection={formSection} open={active} />
			{formElements}
		</fieldset>
	);
};
