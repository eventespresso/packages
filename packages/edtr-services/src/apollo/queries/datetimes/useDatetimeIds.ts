import useDatetimes from './useDatetimes';
import { EntityId } from '@eventespresso/data';
import { getGuids } from '@eventespresso/predicates';

const useDatetimeIds = (): EntityId[] => {
	const datetimes = useDatetimes();

	return getGuids(datetimes);
};

export default useDatetimeIds;
