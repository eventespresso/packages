import { memo } from 'react';
import classNames from 'classnames';

import { Droppable } from '@eventespresso/adapters';
import { getPropsAreEqual } from '@eventespresso/utils';

import { useFormState } from '../state';
import type { FormSectionProps } from '../types';
import { FormElement } from '../FormElement';

export const FormSectionElements = memo<FormSectionProps>(({ formSection }) => {
	const { getElements } = useFormState();

	return (
		<Droppable droppableId={formSection.UUID} type='element'>
			{({ innerRef, droppableProps, placeholder }, { isDraggingOver }) => {
				const className = classNames('ee-droppable', isDraggingOver && 'ee-droppable--is-dragging-over');

				return (
					<div {...droppableProps} className={className} ref={innerRef}>
						{getElements({ sectionId: formSection.UUID }).map((element, index) => (
							<FormElement key={element.UUID} element={element} index={index} />
						))}
						{placeholder}
					</div>
				);
			}}
		</Droppable>
	);
}, getPropsAreEqual([['formSection']]));
