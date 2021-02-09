import { compose, not, propEq } from 'ramda';

import type { EntityFieldPred } from '@eventespresso/utils';

export type IsDefaultPred = EntityFieldPred<'isDefault', boolean>;

export const isDefault: IsDefaultPred = propEq('isDefault', true);

export const isNotDefault: IsDefaultPred = compose(not, isDefault);
