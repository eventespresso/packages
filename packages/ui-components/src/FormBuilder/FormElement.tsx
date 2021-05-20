import classNames from 'classnames';
import { useDisclosure } from '@eventespresso/hooks';
import { DragHandle, SettingsOutlined, Trash } from '@eventespresso/icons';

import { IconButton } from '../Button';
import { FormElementSettings } from './FormElementSettings';

import type { FormElementProps } from './types';

export const FormElement: React.FC<FormElementProps> = ({ element }) => {
	const { isOpen, onToggle } = useDisclosure();
	const wrapperClass = classNames('ee-form-element__wrapper', isOpen && 'ee-form-element__wrapper--active');

	return (
		<div className={wrapperClass}>
			<div className='ee-form-element'>
				<div className='ee-form-element__input'>
					<label htmlFor={element.UUID}>{element.publicLabel}</label>
					<input type='text' id={element.UUID} placeholder={element.placeholder} />
				</div>
				<div className='ee-form-element__type'>{element.type}</div>
				<div className='ee-form-element__actions'>
					<IconButton
						active={isOpen}
						borderless
						icon={SettingsOutlined}
						onClick={onToggle}
						size='smaller'
						transparentBg
					/>
					<IconButton icon={Trash} borderless size='smaller' transparentBg />
					<IconButton icon={DragHandle} borderless className='ee-drag-handle' size='smaller' transparentBg />
				</div>
			</div>
			<FormElementSettings element={element} open={isOpen} />
		</div>
	);
};
