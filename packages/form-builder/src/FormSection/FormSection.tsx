import { memo } from 'react';
import classNames from 'classnames';

import { Draggable } from '@eventespresso/adapters';
import { getPropsAreEqual } from '@eventespresso/utils';

import { AddFormElementPopover } from './AddFormElementPopover';
import { FormSectionToolbar } from './FormSectionToolbar';
import { FormSectionElements } from './FormSectionElements';
import { FormSectionTabs } from './Tabs';
import { useFormState } from '../state';

import type { FormSectionProps } from '../types';

export const FormSection = memo<FormSectionProps>(({ formSection, index }) => {
	const { isElementOpen } = useFormState();

	const { id } = formSection;

	const active = isElementOpen({ id });
	const fieldsetClass = classNames('ee-form-section', active && 'ee-form-section--active');

	return (
		<Draggable draggableId={id} index={index}>
			{({ draggableProps, dragHandleProps, innerRef }, { isDragging }) => {
				const className = classNames(fieldsetClass, 'ee-draggable', isDragging && 'ee-draggable--is-dragging');
				return (
					<fieldset className={className} {...draggableProps} ref={innerRef}>
						<div className={'ee-form-section__header'}>
							<h4 className='ee-form-section__name'>
								{formSection.adminLabel || formSection.publicLabel}
							</h4>
							<FormSectionToolbar formSection={formSection} dragHandleProps={dragHandleProps} />
						</div>
						<FormSectionTabs formSection={formSection} />
						<FormSectionElements formSection={formSection} />
						<AddFormElementPopover formSection={formSection} />
					</fieldset>
				);
			}}
		</Draggable>
	);
}, getPropsAreEqual([['formSection'], ['index']]));
