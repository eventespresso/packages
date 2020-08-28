import React from 'react';

export interface FilterTagProps {
	className?: string;
	key?: string;
	onRemove: VoidFunction;
	title: React.ReactNode;
}

export interface ActiveFiltersProps {
	title?: React.ReactNode;
}
