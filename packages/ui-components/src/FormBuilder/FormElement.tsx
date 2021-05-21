import classNames from 'classnames';
import { useDisclosure } from '@eventespresso/hooks';
import { More } from '@eventespresso/icons';

import { IconButton } from '../Button';
import { FormElementInput } from './FormElementInput';
import { FormElementToolbar } from './FormElementToolbar';

import type { FormElementProps } from './types';

export const FormElement: React.FC<FormElementProps> = ({ element }) => {
	const { isOpen, onToggle } = useDisclosure();
	const wrapperClass = classNames('ee-form-element__wrapper', isOpen && 'ee-form-element__wrapper--active');

	return (
		<div className={wrapperClass}>
			<div className='ee-form-element'>
				<FormElementInput element={element} />
				<IconButton
					active={isOpen}
					borderless
					className='ee-form-element__menu-button'
					icon={More}
					onClick={onToggle}
					size='small'
					transparentBg
				/>
				<FormElementToolbar active={isOpen} element={element} />
			</div>
		</div>
	);
};
