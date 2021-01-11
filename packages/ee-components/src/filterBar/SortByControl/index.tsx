import { __ } from '@eventespresso/i18n';
import { DragAndDrop } from '@eventespresso/adapters';
import { Button, Modal, Select } from '@eventespresso/ui-components';
import { useDisclosure } from '@eventespresso/hooks';

import type { SortByControlProps } from './types';

import './style.scss';

export const SortByControl: React.FC<SortByControlProps> = ({
	draggableItems,
	droppableId,
	entityType,
	label,
	onChangeValue,
	onSort,
	options,
	value,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const disabled = value !== 'order';
	const tooltip = disabled && __('reordering is available only when custom order is selected');
	const text =
		(entityType === 'datetimes' && __('reorder dates')) || (entityType === 'tickets' && __('reorder tickets'));

	return (
		<>
			<div className='ee-sort-by-control'>
				<Select
					id='dates-list-sort-by-control'
					label={label}
					options={options}
					onChangeValue={onChangeValue}
					value={value}
				/>
				<Button
					buttonText={text}
					isDisabled={disabled}
					onClick={onOpen}
					noBoxShadow
					noMargin
					tooltip={tooltip}
				/>
			</div>
			<Modal isOpen={isOpen} onClose={onClose} title={text}>
				<DragAndDrop
					asContainer='ul'
					asItem='li'
					droppableId={droppableId}
					items={draggableItems}
					onDragEnd={onSort}
				/>
			</Modal>
		</>
	);
};
