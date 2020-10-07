import React, { useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { FilterBarFilter, SelectInput } from '@eventespresso/components';
import type { DatetimesFilterStateManager } from '@eventespresso/edtr-services';
import type { FilterBarUIComponentProps } from '@eventespresso/registry';
import { useDatesListFilterState } from '@eventespresso/edtr-services';

import { useRecurrences } from '../../../services/apollo';

type Props = FilterBarUIComponentProps<DatetimesFilterStateManager>;

/**
 * filter for displaying dates that belong to a recurrence pattern
 */
const RecurrenceControl: React.FC<Props> = () => {
	const { recurrence, setRecurrence } = useDatesListFilterState();

	const recurrences = useRecurrences();

	const options = useMemo(() => {
		return recurrences.map(({ dbId, id, name }) => {
			return { value: id, label: `#${dbId}: ${name}` };
		});
	}, [recurrences]);

	return (
		<FilterBarFilter>
			<SelectInput
				id='dates-list-recurrence-control'
				label={__('Recurrence pattern')}
				value={recurrence}
				options={options}
				onChangeValue={setRecurrence}
			/>
		</FilterBarFilter>
	);
};

export default RecurrenceControl;
