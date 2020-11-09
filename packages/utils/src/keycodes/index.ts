import { includes } from 'ramda';
import type { Key } from './types';

const eventHasKey = (key: Key) => (e: React.KeyboardEvent): boolean => e?.key === key;

const eventKeyIn = (keys: Key[]) => (e: React.KeyboardEvent): boolean => includes(e?.key, keys);

export const isEnterKey = eventHasKey('Enter');

export const isEscapeKey = eventKeyIn(['Esc', 'Escape']);

export const isLeftKey = eventKeyIn(['Left', 'ArrowLeft']);

export const isRightKey = eventKeyIn(['Right', 'ArrowRight']);

export const isTabKey = eventHasKey('Tab');
