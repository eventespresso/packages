import { useCallback } from 'react';

import { useBulkEdit, shiftDate } from '@eventespresso/services';
import { entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { useDatetimes, BulkUpdateDatetimeInput, useBulkEditDatetimes } from '@eventespresso/edtr-services';

import type { BulkEditFormShape } from './types';

type Callback = (values: BulkEditFormShape) => void;

const useSubmitForm = (onClose: VoidFunction): Callback => {
	const { getSelected, unSelectAll } = useBulkEdit();
	const allDates = useDatetimes();
	const { updateEntities } = useBulkEditDatetimes();
	return useCallback<Callback>(
		({ shiftDates, ...values }) => {
			// pull the shutter down
			onClose();
			// back to basics
			unSelectAll();
			// This contains the unique input for each date.
			let uniqueInputs: BulkUpdateDatetimeInput['uniqueInputs'] = [];
			// we need to shift the dates.
			if (shiftDates?.unit && shiftDates?.value && shiftDates?.type) {
				// get full date objects from the selected IDs
				const selectedDates = entitiesWithGuIdInArray(allDates, getSelected());
				// keep the date shifter ready
				const shiftTheDate = shiftDate(shiftDates);
				// shift start and end dates for the selected dates
				uniqueInputs = selectedDates.map((datetime) => {
					const startDate = shiftTheDate(datetime.startDate).toISOString();
					const endDate = shiftTheDate(datetime.endDate).toISOString();
					return { id: datetime.id, startDate, endDate };
				});
			} else {
				// otherwise we just need the ids for uniqueInputs
				uniqueInputs = getSelected().map((id) => ({ id }));
			}

			// we need to add id to shared input to avoid GQL schema yelling at us.
			const sharedInput = { ...values, id: '' };
			// do the thing
			updateEntities({ uniqueInputs, sharedInput });
		},
		[allDates, getSelected, onClose, unSelectAll, updateEntities]
	);
};

export default useSubmitForm;
