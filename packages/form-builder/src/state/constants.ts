import { LocalOnlyFields, FormStatusFlags } from '../types';

export const LOCAL_ONLY_FIELDS: Array<keyof LocalOnlyFields> = ['isModified', 'isNew', 'value'];

export const STATUS_FLAGS: Array<keyof FormStatusFlags> = [
	'isActive',
	'isArchived',
	'isDefault',
	'isShared',
	'isTrashed',
];
