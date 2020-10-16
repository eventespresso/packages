import { useMemo } from 'react';

import { findEntityByGuid } from '@eventespresso/predicates';

import useRecurrences from './useRecurrences';
import type { Recurrence } from '../../types';
import type { EntityItemProps } from '@eventespresso/edtr-services';

const useRecurrenceItem = ({ id }: EntityItemProps): Recurrence => {
	const recurrences = useRecurrences();

	return useMemo(() => findEntityByGuid(recurrences)(id), [recurrences, id]);
};

export default useRecurrenceItem;
