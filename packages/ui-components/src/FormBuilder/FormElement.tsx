import { DragOutlined, Edit, Trash } from '@eventespresso/icons';

import { IconButton } from '../Button';

import type { FormElementProps } from './types';

export const FormElement: React.FC<FormElementProps> = ({ element }) => {
	return (
		<div className='ee-form-element__wrapper'>
			<div className='ee-form-element'>
				<div className='ee-form-element__input'>
					<label htmlFor={element.UUID}>{element.publicLabel}</label>
					<input type='text' id={element.UUID} placeholder={element.placeholder} />
				</div>
				<div className='ee-form-element__type'>Text Input</div>
				<div className='ee-form-element__actions'>
					<IconButton icon={Edit} borderless size='smaller' transparentBg />
					<IconButton icon={Trash} borderless size='smaller' transparentBg />
					<IconButton icon={DragOutlined} borderless size='smaller' transparentBg />
				</div>
			</div>
			<div className='ee-form-element__tabs'>tabs go here but are hidden until edit button is pressed</div>
		</div>
	);
};
