import { compose, not, propEq } from 'ramda';

export type IsDefaultPred = <T extends Record<'isDefault', boolean>>(entity: T) => boolean;

export const isDefault: IsDefaultPred = propEq('isDefault', true);

export const isNotDefault: IsDefaultPred = compose(not, isDefault);
