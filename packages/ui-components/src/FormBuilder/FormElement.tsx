import classNames from 'classnames';
import { useDisclosure } from '@eventespresso/hooks';
import { DragHandle, SettingsOutlined, Trash } from '@eventespresso/icons';

import { IconButton } from '../Button';
import { FormElementSettings } from './FormElementSettings';
import { ELEMENT_BLOCKS_INDEXED } from './constants';
import { FormElementInput } from './FormElementInput';

import type { FormElementProps } from './types';

export const FormElement: React.FC<FormElementProps> = ({ element }) => {
	const { isOpen, onToggle } = useDisclosure();
	const wrapperClass = classNames('ee-form-element__wrapper', isOpen && 'ee-form-element__wrapper--active');

	const elementTypeLabel = ELEMENT_BLOCKS_INDEXED[element.type]?.label || '';

	return (
		<div className={wrapperClass}>
			<div className='ee-form-element'>
				<FormElementInput element={element} />
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
			<FormElementSettings element={element} open={isOpen} />
		</div>
	);
};
