export type CurrentUserCan = (capability: Capability) => boolean;

export type Capability =
	| 'use_bulk_edit'
	/* example */
	| 'edit_prices';
