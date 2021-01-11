import { Draggable as DraggableAdapter } from 'react-beautiful-dnd';

import { DragOutlined } from '@eventespresso/icons';
import type { DraggableProps } from './types';

const Draggable: React.FC<DraggableProps> = ({ asItem: AsItem, content, index, ...props }) => {
	if (!content) {
		return null;
	}

	return (
		<DraggableAdapter key={props.id} draggableId={props.id} index={index}>
			{({ innerRef, draggableProps, dragHandleProps }, { isDragging }) => {
				return (
					<AsItem
						ref={innerRef}
						// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
						style={{
							...draggableProps.style,
							border: isDragging ? '1px solid var(--ee-color-bright-blue)' : 'none',
							display: isDragging ? 'table' : 'table-row',
						}}
						{...draggableProps}
						{...dragHandleProps}
					>
						<DragOutlined />
						{content}
					</AsItem>
				);
			}}
		</DraggableAdapter>
	);
};

export default Draggable;
