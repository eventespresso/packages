import classNames from 'classnames';

import { FormElementInput } from './FormElementInput';
import { FormElementToolbar } from './FormElementToolbar';
import { FormElementTabs } from './Tabs';
import { useFormState } from '../state';

import type { FormElementProps } from '../types';

export const FormElement: React.FC<FormElementProps> = ({ element }) => {
	const { isElementOpen } = useFormState();
	const active = isElementOpen(element.UUID);
	const wrapperClass = classNames('ee-form-element__wrapper', active && 'ee-form-element__wrapper--active');
	return (
		<div className={wrapperClass}>
			<div className='ee-form-element'>
				<FormElementInput element={element} />
				<FormElementToolbar element={element} />
			</div>
			<FormElementTabs element={element} />
		</div>
	);
};
