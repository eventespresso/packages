import { useMemo } from 'react';

import { findEntityByGuid } from '@eventespresso/predicates';

import type { Datetime } from '../../types';
import type { EntityItemProps } from '../types';
import useDatetimes from './useDatetimes';

const useDatetimeItem = ({ id }: EntityItemProps): Datetime => {
	const datetimes = useDatetimes();

	return useMemo(() => findEntityByGuid(datetimes)(id), [datetimes, id]);
};

export default useDatetimeItem;
