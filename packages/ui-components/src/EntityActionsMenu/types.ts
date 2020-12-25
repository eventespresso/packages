import type React from 'react';

export enum EntityActionsMenuLayout {
	Horizontal = 'horizontal',
	Vertical = 'vertical',
}

export interface EntityActionsMenuProps {
	className?: string;
	layout?: EntityActionsMenuLayout;
	menuItems: Array<React.ReactNode>;
}
