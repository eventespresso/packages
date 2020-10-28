import { Key } from './types';

const eventHasKey = (key: Key) => (e: React.KeyboardEvent): boolean => e?.key === key;

export const isEnterKey = eventHasKey(Key.Enter);

export const isEscapeKey = eventHasKey(Key.Escape);

export const isTabKey = eventHasKey(Key.Tab);
