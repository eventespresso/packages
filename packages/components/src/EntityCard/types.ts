import type { Entity } from '@eventespresso/data';

export interface CompactDetailsProps {
	description: string;
	id: string;
	name: string;
	price?: number;
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
