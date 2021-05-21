import classNames from 'classnames';
import { useDisclosure } from '@eventespresso/hooks';
import { DragHandle, SettingsOutlined, Trash } from '@eventespresso/icons';

import { IconButton } from '../Button';
import { ELEMENT_BLOCKS_INDEXED } from './constants';
import { FormElementSettings } from './FormElementSettings';

import type { FormElementProps } from './types';

export const FormElementToolbar: React.FC<FormElementProps> = ({ active, element }) => {
	const { isOpen, onToggle } = useDisclosure();
	const menuClass = classNames('ee-form-element__menu', active && 'ee-form-element__menu--active');

	const elementTypeLabel = ELEMENT_BLOCKS_INDEXED[element.type]?.label || '';

	return (
		<>
			<div className={menuClass}>
				<div className='ee-form-element__type'>{elementTypeLabel}</div>
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
			{/* <div className='break' /> */}
			<FormElementSettings element={element} open={isOpen} />
		</>
	);
};
