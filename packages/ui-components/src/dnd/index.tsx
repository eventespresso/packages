import { __ } from '@eventespresso/i18n';
import { DragAndDrop as DragAndDropAdapter } from '@eventespresso/adapters';
import { useDisclosure } from '@eventespresso/hooks';

import type { SortByControlProps } from './types';

import './style.scss';

export const DragAndDrop: React.FC<SortByControlProps> = ({
	draggableItems,
	droppableId,
	entityType,
	label,
	onChangeValue,
	onSort,
	options,
	value,
}) => {
	return (
		<DragAndDropAdapter
			asContainer='ul'
			asItem='li'
			droppableId={droppableId}
			items={draggableItems}
			onDragEnd={onSort}
		/>
	);
};
