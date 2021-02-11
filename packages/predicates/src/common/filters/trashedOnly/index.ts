import { filter } from 'ramda';

import { isTrashed } from '../../isTrashed';

export const trashedOnly = filter(isTrashed);
