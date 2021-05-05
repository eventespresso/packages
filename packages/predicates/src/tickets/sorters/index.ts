import { compareAsc, parseISO } from 'date-fns';
import { compose, prop, sort, sortBy as sortByFn, toLower } from 'ramda';

import type { Ticket, SortBy } from '@eventespresso/edtr-services';

interface SortByProps {
	tickets: Ticket[];
	sortBy?: SortBy;
}

const sorters = ({ tickets, sortBy = 'date' }: SortByProps): Ticket[] => {
	switch (sortBy) {
		case 'date':
			return sort(({ startDate: dateLeft }, { startDate: dateRight }) => {
				return compareAsc(parseISO(dateLeft), parseISO(dateRight));
			}, tickets);
		case 'name':
			return sortByFn(compose(toLower, prop('name')), tickets);
		case 'id':
			return sortByFn(prop('dbId'), tickets);
		case 'order':
			return sortByFn(prop('order'), tickets);
	}
};

export default sorters;
