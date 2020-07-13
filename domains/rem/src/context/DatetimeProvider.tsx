import React, { createContext } from 'react';

import type { Datetime } from '@eventespresso/edtr-services';
import type { DatetimeProviderProps } from './types';

const DatetimeContext = createContext<Datetime>(null);

const { Provider, Consumer: DatetimeConsumer } = DatetimeContext;

const DatetimeProvider: React.FC<DatetimeProviderProps> = ({ children, datetime }) => {
	return <Provider value={datetime}>{children}</Provider>;
};

export { DatetimeContext, DatetimeProvider, DatetimeConsumer };
