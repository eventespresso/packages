import type { Entity } from '@eventespresso/data';

export interface EntityCardProps {
	actionsMenu: JSX.Element;
	cacheId?: string;
	details: JSX.Element;
	entity: Entity;
	reverse?: boolean;
	sidebar: JSX.Element;
	sidebarClass?: string;
}

export interface SimpleEntityCardProps {
	afterDetails?: JSX.Element;
	beforeDetails?: JSX.Element;
	id: string;
	name: string;
	sidebar?: JSX.Element;
}
