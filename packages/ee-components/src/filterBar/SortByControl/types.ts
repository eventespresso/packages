import type { SelectWithLabel, DragAndDropProps } from '@eventespresso/ui-components';
import type { SortBy } from '@eventespresso/edtr-services';
import type { Entity } from '@eventespresso/data';

import type { EntityType } from '../../';

export interface SortByControlProps<E extends Entity = Entity>
	extends EntityType,
		Pick<DragAndDropProps<E>, 'renderDraggableItem'>,
		Pick<React.ComponentProps<typeof SelectWithLabel>, 'label' | 'options'> {
	draggableItems: Array<E>;
	droppableId: string;
	id: string;
	onChangeValue: (sortBy: SortBy) => void;
	onSort: DragAndDropProps['onDragEnd'];
	onSubmit: VoidFunction;
	value: SortBy;
}
