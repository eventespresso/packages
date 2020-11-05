import type { Key } from './types';

const eventHasKey = (key: Key) => (e: React.KeyboardEvent): boolean => e?.key === key;

export const isEnterKey = eventHasKey('Enter');

export const isEscapeKey = (e: React.KeyboardEvent): boolean => eventHasKey('Esc')(e) || eventHasKey('Escape')(e);

export const isLeftKey = (e: React.KeyboardEvent): boolean => eventHasKey('Left')(e) || eventHasKey('ArrowLeft')(e);

export const isRightKey = (e: React.KeyboardEvent): boolean => eventHasKey('Right')(e) || eventHasKey('ArrowRight')(e);

export const isTabKey = eventHasKey('Tab');
