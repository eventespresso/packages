import React from 'react';

export interface OnDateProps {
	id: string;
	value: Date;
	onChange: (date: Date) => void;
	calendarComponent: React.ComponentType<any>;
	locale?: string;
}

export interface StartProps extends OnDateProps {}
