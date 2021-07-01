import { LocalOnlyFields, FormStatusFlags } from '../types';

export const PURITY_FLAGS: Array<keyof LocalOnlyFields> = ['isModified', 'isNew'];

export const STATUS_FLAGS: Array<keyof FormStatusFlags> = [
	'isActive',
	'isArchived',
	'isDefault',
	'isShared',
	'isTrashed',
];
