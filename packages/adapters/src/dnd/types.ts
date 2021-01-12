import type {
	OnBeforeCaptureResponder,
	OnBeforeDragStartResponder,
	OnDragStartResponder,
	OnDragUpdateResponder,
	OnDragEndResponder,
} from 'react-beautiful-dnd';

export interface DragAndDropProps extends Responders {
	asContainer: 'div' | 'ol' | 'ul';
	asItem: 'div' | 'li';
	droppableId: string;
	items: any[];
	renderDraggableItems: (items: any[]) => DraggableProps;
}

export interface DraggableProps extends Pick<DragAndDropProps, 'asItem'> {
	content: React.ReactNode;
	id: string;
	index: number;
}

interface Responders {
	onBeforeCapture?: OnBeforeCaptureResponder;
	onBeforeDragStart?: OnBeforeDragStartResponder;
	onDragStart?: OnDragStartResponder;
	onDragUpdate?: OnDragUpdateResponder;
	onDragEnd?: OnDragEndResponder;
}
