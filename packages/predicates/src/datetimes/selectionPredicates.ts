import { includes, ObjPred } from 'ramda';

import { DATETIME_FIELDS, DATETIME_INPUT_FIELDS } from './datetimeFields';

export const isDatetimeField: ObjPred = (value, field) => includes(field, DATETIME_FIELDS);

export const isDatetimeInputField: ObjPred = (value, field) => includes(field, DATETIME_INPUT_FIELDS);
