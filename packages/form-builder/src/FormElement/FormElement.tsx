import { memo } from 'react';
import classNames from 'classnames';

import { Draggable } from '@eventespresso/adapters';
import { getPropsAreEqual } from '@eventespresso/utils';

import { FormElementInput } from './FormElementInput';
import { FormElementToolbar } from './FormElementToolbar';
import { FormElementTabs } from './Tabs';
import { useFormState } from '../state';

import type { FormElementProps } from '../types';

export const FormElement = memo<FormElementProps>(({ element, index }) => {
	const { isElementOpen } = useFormState();
	const active = isElementOpen({ UUID: element.UUID });
	const wrapperClass = classNames('ee-form-element__wrapper', active && 'ee-form-element__wrapper--active');

	return (
		<Draggable draggableId={element.UUID} index={index}>
			{({ draggableProps, dragHandleProps, innerRef }, { isDragging }) => {
				const className = classNames(wrapperClass, 'ee-draggable', isDragging && 'ee-draggable--is-dragging');
				return (
					<div className={className} {...draggableProps} ref={innerRef}>
						<div className='ee-form-element'>
							<FormElementInput element={element} />
							<FormElementToolbar element={element} dragHandleProps={dragHandleProps} />
						</div>
						<FormElementTabs element={element} />
					</div>
				);
			}}
		</Draggable>
	);
}, getPropsAreEqual([['element'], ['index']]));
