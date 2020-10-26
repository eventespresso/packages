import { useMemo } from 'react';
import { useReactiveVar, ReactiveVar } from '@apollo/react-hooks';

export type ReactiveVariable<T> = [T, ReactiveVar<T>];

export const useReactiveVariable = <T>(reactiveVar: ReactiveVar<T>): ReactiveVariable<T> => {
	const value = useReactiveVar(reactiveVar);
	return useMemo(() => [value, reactiveVar], [reactiveVar, value]);
};
