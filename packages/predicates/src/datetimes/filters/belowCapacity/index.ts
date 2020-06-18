import { Datetime } from '@eventespresso/edtr-services';
import filter from './filter';

type BelowCapacityProps = {
	capacity: number;
	dates: Datetime[];
};

const belowCapacity = ({ capacity, dates }: BelowCapacityProps): Datetime[] => {
	return dates.filter((date) => filter({ capacity, date }));
};

export default belowCapacity;
