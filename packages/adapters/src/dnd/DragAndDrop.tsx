import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Draggable from './Draggable';
import type { DragAndDropProps } from './types';

export const DragAndDrop: React.FC<DragAndDropProps> = ({
	asContainer: AsContainer,
	asItem,
	droppableId,
	items,
	onBeforeDragStart,
	onDragEnd,
	onDragStart,
	onDragUpdate,
}) => {
	const draggableItems = items.map((item, index) => (
		<Draggable asItem={asItem} content={item.name} id={item.id} index={index} key={item?.id} />
	));

	return (
		<DragDropContext
			onBeforeDragStart={onBeforeDragStart}
			onDragStart={onDragStart}
			onDragUpdate={onDragUpdate}
			onDragEnd={onDragEnd}
		>
			<Droppable droppableId={droppableId}>
				{({ innerRef, droppableProps, placeholder }, { isDraggingOver }) => {
					// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
					const style = {
						border: isDraggingOver ? '1px solid lightgreen' : 'none',
						borderSpacing: isDraggingOver ? '2px' : '0',
					};

					return (
						<AsContainer ref={innerRef} style={style} {...droppableProps}>
							{draggableItems}
							{placeholder}
						</AsContainer>
					);
				}}
			</Droppable>
		</DragDropContext>
	);
};
