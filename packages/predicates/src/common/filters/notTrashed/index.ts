import { filter } from 'ramda';

import { isNotTrashed } from '../../isTrashed';

export const notTrashed = filter(isNotTrashed);
