import { useMemoStringify } from '@eventespresso/hooks';
import { getGuids } from '@eventespresso/predicates';
import { EntityId } from '@eventespresso/data';
import useDatetimes from './useDatetimes';

const useDatetimeIds = (): EntityId[] => {
	const datetimes = useDatetimes();

	return useMemoStringify(getGuids(datetimes));
};

export default useDatetimeIds;
