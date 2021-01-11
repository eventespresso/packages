import classNames from 'classnames';

import { DragDropContext, Droppable, DragAndDropProps } from '@eventespresso/adapters';
import Draggable from './Draggable';

import './style.scss';

export const DragAndDrop: React.FC<DragAndDropProps> = ({
	asContainer: AsContainer,
	asItem,
	droppableId,
	items,
	onBeforeDragStart,
	onDragEnd,
	onDragStart,
	onDragUpdate,
	renderDraggableItems,
}) => {
	const draggableItems = items
		.map(renderDraggableItems)
		.map((item, index) => (
			<Draggable asItem={asItem} content={item.content} id={item.id} index={index} key={item?.id} />
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
					const className = classNames('ee-droppable', isDraggingOver && 'ee-droppable--is-dragging-over');

					return (
						<AsContainer {...droppableProps} className={className} ref={innerRef}>
							{draggableItems}
							{placeholder}
						</AsContainer>
					);
				}}
			</Droppable>
		</DragDropContext>
	);
};
