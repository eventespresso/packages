import classNames from 'classnames';

import { Draggable as DraggableAdapter } from '@eventespresso/adapters';
import { DragOutlined } from '@eventespresso/icons';
import { DraggableProps } from './types';

export const Draggable: React.FC<DraggableProps> = ({ asItem: AsItem, content, index, ...props }) => {
	if (!content) {
		return null;
	}

	return (
		<DraggableAdapter key={props.id} draggableId={props.id} index={index}>
			{({ innerRef, draggableProps, dragHandleProps }, { isDragging }) => {
				const className = classNames('ee-draggable', isDragging && 'ee-draggable--is-dragging');

				return (
					<AsItem className={className} ref={innerRef} {...draggableProps} {...dragHandleProps}>
						<DragOutlined />
						{content}
					</AsItem>
				);
			}}
		</DraggableAdapter>
	);
};
