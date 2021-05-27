import classNames from 'classnames';

import { FormElement } from '../FormElement';
import { FormSectionSidebar } from './FormSectionSidebar';
import { FormSectionToolbar } from './FormSectionToolbar';
import { FormSectionTabs } from './Tabs';
import { useFormState } from '../state';

import type { FormSectionProps } from '../types';

export const FormSection: React.FC<FormSectionProps> = ({ formSection }) => {
	const { isElementOpen, getElements } = useFormState();

	const active = isElementOpen(formSection.UUID);
	const fieldsetClass = classNames('ee-form-section', active && 'ee-form-section--active');

	return (
		<fieldset className={fieldsetClass}>
			<div className={'ee-form-section__header'}>
				<h4 className='ee-form-section__name'>{formSection.adminLabel || formSection.name}</h4>
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
