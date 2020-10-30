import type { Key } from './types';

const eventHasKey = (key: Key) => (e: React.KeyboardEvent): boolean => e?.key === key;

export const isEnterKey = eventHasKey('Enter');

export const isEscapeKey = eventHasKey('Escape');

export const isLeftKey = eventHasKey('ArrowLeft');

export const isRightKey = eventHasKey('ArrowRight');

export const isTabKey = eventHasKey('Tab');
