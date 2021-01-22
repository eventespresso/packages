import type { DragAndDropProps } from '@eventespresso/adapters';
import type { SelectProps } from '@eventespresso/ui-components';
import type { Entity } from '@eventespresso/data';

import type { EntityType } from '../../';

export interface SortByControlProps<E extends Entity>
	extends EntityType,
		Pick<DragAndDropProps, 'renderDraggableItems'>,
		Pick<SelectProps, 'label' | 'options'> {
	draggableItems: E[];
	droppableId: string;
	id: string;
	onChangeValue: (sortBy) => void;
	onSort: DragAndDropProps['onDragEnd'];
	onSubmit: VoidFunction;
	value: any;
}
