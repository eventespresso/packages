import classNames from 'classnames';
import { More } from '@eventespresso/icons';

import { IconButton } from '../../Button';
import { FormElementInput } from './FormElementInput';
import { FormElementToolbar } from './FormElementToolbar';
import { FormElementTabs } from './Tabs';
import { useFormState } from '../state';

import type { FormElementProps } from '../types';

export const FormElement: React.FC<FormElementProps> = ({ element, sectionId }) => {
	const { isElementOpen, toggleOpenElement } = useFormState();
	const active = isElementOpen(element.UUID);
	const wrapperClass = classNames('ee-form-element__wrapper', active && 'ee-form-element__wrapper--active');

	return (
		<div className={wrapperClass}>
			<div className='ee-form-element'>
				<FormElementInput sectionId={sectionId} element={element} />
				<IconButton
					active={active}
					borderless
					className='ee-form-element__menu-button'
					icon={More}
					onClick={toggleOpenElement(element.UUID)}
					size='small'
					transparentBg
				/>
				<FormElementToolbar element={element} sectionId={sectionId} />
			</div>
			<FormElementTabs element={element} />
		</div>
	);
};
