import classNames from 'classnames';

import { More } from '@eventespresso/icons';
import { IconButton } from '@eventespresso/ui-components';

import { FormElementInput } from './FormElementInput';
import { FormElementToolbar } from './FormElementToolbar';
import { FormElementTabs } from './Tabs';

import type { FormElementProps } from '../types';

export const FormElement: React.FC<FormElementProps> = ({ element, isOpen, toggleElement }) => {
	const active = isOpen(element.UUID);
	const wrapperClass = classNames('ee-form-element__wrapper', active && 'ee-form-element__wrapper--active');

	return (
		<div className={wrapperClass}>
			<div className='ee-form-element'>
				<FormElementInput element={element} />
				<IconButton
					active={active}
					borderless
					className='ee-form-element__menu-button'
					icon={More}
					onClick={toggleElement(element.UUID)}
					size='small'
					transparentBg
				/>
				<FormElementToolbar active={active} element={element} />
			</div>
			<FormElementTabs element={element} open={active} />
		</div>
	);
};
