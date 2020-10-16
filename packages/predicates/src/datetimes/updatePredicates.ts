import { pickBy } from 'ramda';
import { isDatetimeField } from './selectionPredicates';
import type { Datetime } from '@eventespresso/edtr-services';

export const copyDatetimeFields = <T>(datetime: T, predicate = isDatetimeField): Datetime =>
	pickBy(predicate, datetime);
