import { useContext } from 'react';
import invariant from 'invariant';

import type { Datetime } from '@eventespresso/edtr-services';
import { DatetimeContext } from './DatetimeProvider';

const useDatetime = (): Datetime => {
	const value = useContext(DatetimeContext);

	invariant(value || 1, 'useDatetime must be used inside REM <DatetimeProvider> component');

	return value;
};

export default useDatetime;
