import useDatetimes from './useDatetimes';
import { EntityId } from '@eventespresso/data';
import { getGuids } from '@eventespresso/services';

const useDatetimeIds = (): EntityId[] => {
	const datetimes = useDatetimes();

	return getGuids(datetimes);
};

export default useDatetimeIds;
