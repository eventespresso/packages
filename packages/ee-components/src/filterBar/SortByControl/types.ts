import type { DragAndDropProps } from '@eventespresso/adapters';
import type { SelectProps } from '@eventespresso/ui-components';
import type { Datetime, SortBy, Ticket } from '@eventespresso/edtr-services';

import type { EntityType } from '../../';

export interface SortByControlProps
	extends EntityType,
		Pick<DragAndDropProps, 'renderDraggableItems'>,
		Pick<SelectProps, 'label' | 'onChangeValue' | 'options'> {
	draggableItems: Datetime[] | Ticket[];
	droppableId: string;
	id: string;
	onSort: DragAndDropProps['onDragEnd'];
	onSubmit: VoidFunction;
	value: SortBy;
}
