import { useCallback } from 'react';

import { DragDropContextProps as DnDProps } from '@eventespresso/adapters';

import { useFormState } from './useFormState';

export const useHandleDnD = (): DnDProps['onDragEnd'] => {
	const { moveSection, moveElement } = useFormState();

	return useCallback(
		(result) => {
			console.log(result);
			const { destination, source, draggableId, type } = result;

			const noDestination = !destination;
			const noChange = source?.index === destination?.index && destination?.droppableId === source?.droppableId;

			if (noDestination || noChange) {
				return;
			}
			// if we are dealing with sorting of sections
			if (type === 'section') {
				moveSection({
					UUID: draggableId,
					index: destination.index,
				});
			} else if (type === 'element') {
				moveElement({
					UUID: draggableId,
					index: destination.index,
					sectionId: destination?.droppableId,
				});
			}
		},
		[moveElement, moveSection]
	);
};
