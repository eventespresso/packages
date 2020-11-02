import type { Key } from './types';

const eventHasKey = (key: Key) => (e: React.KeyboardEvent): boolean => e?.key === key;

export const isEnterKey = eventHasKey('Enter');

export const isEscapeKey = eventHasKey('Esc') || eventHasKey('Escape');

export const isLeftKey = eventHasKey('Left') || eventHasKey('ArrowLeft');

export const isRightKey = eventHasKey('Right') || eventHasKey('ArrowRight');

export const isTabKey = eventHasKey('Tab');
