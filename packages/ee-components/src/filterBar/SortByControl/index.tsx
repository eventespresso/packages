import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Button, DragAndDrop, ModalWithAlert, Select } from '@eventespresso/ui-components';
import { useDisclosure } from '@eventespresso/hooks';

import type { SortByControlProps } from './types';

import './style.scss';

export const SortByControl: React.FC<SortByControlProps> = ({
	draggableItems,
	droppableId,
	entityType,
	id,
	label,
	onChangeValue,
	onSort,
	onSubmit,
	options,
	renderDraggableItems,
	value,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const disabled = value !== 'order';
	const tooltip = disabled && __('reordering is available only when custom order is selected');
	const text =
		(entityType === 'datetimes' && __('reorder dates')) || (entityType === 'tickets' && __('reorder tickets'));

	const onSubmitHandler = useCallback(() => {
		onSubmit();
		onClose();
	}, [onClose, onSubmit]);

	return (
		<>
			<div className='ee-sort-by-control'>
				<Select id={id} label={label} options={options} onChangeValue={onChangeValue} value={value} />
				<Button
					buttonText={text}
					isDisabled={disabled}
					onClick={onOpen}
					noBoxShadow
					noMargin
					tooltip={tooltip}
				/>
			</div>
			<ModalWithAlert
				className='ee-filter-bar-modal__reorder-entitites'
				isOpen={isOpen}
				onCancel={onClose}
				onClose={onClose}
				onSubmit={onSubmitHandler}
				showAlertOnClose={false}
				title={text}
			>
				<DragAndDrop
					asContainer='ul'
					asItem='li'
					droppableId={droppableId}
					items={draggableItems}
					onDragEnd={onSort}
					renderDraggableItems={renderDraggableItems}
				/>
			</ModalWithAlert>
		</>
	);
};
