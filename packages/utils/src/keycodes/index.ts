import { anyPass } from 'ramda';
import type { Key } from './types';

const eventHasKey = (key: Key) => (e: React.KeyboardEvent): boolean => e?.key === key;

export const isEnterKey = eventHasKey('Enter');

export const isEscapeKey = anyPass([eventHasKey('Esc'), eventHasKey('Escape')]);

export const isLeftKey = anyPass([eventHasKey('Left'), eventHasKey('ArrowLeft')]);

export const isRightKey = anyPass([eventHasKey('Right'), eventHasKey('ArrowRight')]);

export const isTabKey = eventHasKey('Tab');
