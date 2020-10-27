import { Key } from './types';

export const isEnterKey = (e: React.KeyboardEvent): boolean => e.key === Key.Enter;

export const isEscapeKey = (e: React.KeyboardEvent): boolean => e.key === Key.Escape;

export const isTabKey = (e: React.KeyboardEvent): boolean => e.key === Key.Tab;
