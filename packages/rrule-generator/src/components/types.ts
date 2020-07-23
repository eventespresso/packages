import React from 'react';
import { StateProviderProps } from '../context';

export interface RRuleGeneratorProps extends StateProviderProps {
	id?: string;
	value?: string;
	onChange: (rRuleString: string) => void;
	calendarComponent?: React.ComponentType;
	hideStart?: boolean;
	hideEnd?: boolean;
	hideError?: boolean;
}
