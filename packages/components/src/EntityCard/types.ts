import type { Entity } from '@eventespresso/data';

export interface DetailsProps {
	entity: Entity;
}

export interface EntityCardProps {
	actionsMenu?: JSX.Element;
	cacheId?: string;
	compact?: boolean;
	details?: JSX.Element;
	entity: Entity;
	reverse?: boolean;
	sidebar: JSX.Element;
}
