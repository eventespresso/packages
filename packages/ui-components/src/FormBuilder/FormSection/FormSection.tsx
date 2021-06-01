import classNames from 'classnames';

import { Draggable } from '@eventespresso/adapters';

import { FormSectionSidebar } from './FormSectionSidebar';
import { FormSectionToolbar } from './FormSectionToolbar';
import { FormSectionElements } from './FormSectionElements';
import { FormSectionTabs } from './Tabs';
import { useFormState } from '../state';

import type { FormSectionProps } from '../types';

export const FormSection: React.FC<FormSectionProps> = ({ formSection, index }) => {
	const { isElementOpen } = useFormState();

	const { UUID } = formSection;

	const active = isElementOpen({ UUID });
	const fieldsetClass = classNames('ee-form-section', active && 'ee-form-section--active');

	return (
		<Draggable draggableId={UUID} index={index}>
			{({ draggableProps, dragHandleProps, innerRef }) => (
				<fieldset className={fieldsetClass} {...draggableProps} ref={innerRef}>
					<div className={'ee-form-section__header'}>
						<h4 className='ee-form-section__name'>{formSection.adminLabel || formSection.name}</h4>
						<FormSectionToolbar formSection={formSection} dragHandleProps={dragHandleProps} />
					</div>
					<FormSectionTabs formSection={formSection} />
					<FormSectionElements formSection={formSection} />
					<FormSectionSidebar formSection={formSection} />
				</fieldset>
			)}
		</Draggable>
	);
};
