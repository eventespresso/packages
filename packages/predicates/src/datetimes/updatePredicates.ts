import { pickBy } from 'ramda';
import { isDatetimeField } from './selectionPredicates';
import type { Datetime } from '@eventespresso/edtr-services';

export const copyDatetimeFields = <T = Datetime>(datetime: T, predicate = isDatetimeField): T =>
	pickBy<any, T>(predicate, datetime);
