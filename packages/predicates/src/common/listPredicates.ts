import { pluck } from 'ramda';

import { Cacheable, Entity } from '@eventespresso/data';

export const getGuids = pluck<keyof Pick<Entity, 'id'>>('id');

export const getCacheIds = pluck<keyof Pick<Cacheable, 'cacheId'>>('cacheId');
