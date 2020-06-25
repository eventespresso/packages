import type { DatetimeFilterFn } from '../types';

const upcomingOnly: DatetimeFilterFn = (dates) => dates.filter(({ isUpcoming }) => isUpcoming);

export default upcomingOnly;
