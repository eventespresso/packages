import { Children, isValidElement } from 'react';

export function cleanChildren(children: React.ReactNode): Array<React.ReactNode> {
	return Children.toArray(children).filter(isValidElement);
}
