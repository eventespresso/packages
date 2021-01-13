import React, { useCallback, useState } from 'react';
import type { Meta } from '@storybook/react/types-6-0';
import { DragAndDrop } from '@eventespresso/ui-components';
import { nodes } from '@eventespresso/edtr-services/src/apollo/queries/datetimes/test/data';

export default {
	component: DragAndDrop,
	title: 'Components/DragAndDrop',
} as Meta;

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

export const ReorderEntities = () => {
	const [items, setItems] = useState<Array<any>>(nodes);

	const onDragEnd = useCallback(
		(result) => {
			// dropped outside the list
			if (!result.destination) {
				return;
			}

			const reorderedItems = reorder(items, result.source.index, result.destination.index);

			setItems(reorderedItems);
		},
		[items]
	);

	const renderDraggableItems = useCallback(
		(item) => ({
			...item,
			content: (
				<>
					<span>{item.id})</span>
					<span>{item.name}: </span>
				</>
			),
		}),
		[]
	);

	return (
		<DragAndDrop
			asContainer='ul'
			asItem='li'
			droppableId='droppable'
			items={items}
			onDragEnd={onDragEnd}
			renderDraggableItems={renderDraggableItems}
		/>
	);
};
