import React, { Component, useCallback, useState } from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { nodes } from '@eventespresso/edtr-services/src/apollo/queries/datetimes/test/data';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: 'none',
	padding: grid * 2,
	margin: `0 0 ${grid}px 0`,

	// change background colour if dragging
	background: isDragging ? 'lightgreen' : 'red',

	// styles we need to apply on draggables
	...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
	background: isDraggingOver ? 'lightblue' : 'grey',
	padding: grid,
	width: 250,
});

export const SimpleDragAndDrop = () => {
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

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId='droppable'>
				{(droppableProvided, droppableSnapshot) => (
					<div ref={droppableProvided.innerRef} style={getListStyle(droppableSnapshot.isDraggingOver)}>
						{items.map((item, index) => (
							<Draggable key={item.id} draggableId={item.id} index={index}>
								{(draggableProvided, draggableSnapshot) => (
									<div
										ref={draggableProvided.innerRef}
										{...draggableProvided.draggableProps}
										{...draggableProvided.dragHandleProps}
										style={getItemStyle(
											draggableSnapshot.isDragging,
											draggableProvided.draggableProps.style
										)}
									>
										{item.content}
									</div>
								)}
							</Draggable>
						))}
						{droppableProvided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default {
	component: SimpleDragAndDrop,
	title: 'Components/SimpleDragAndDrop',
} as Meta;
