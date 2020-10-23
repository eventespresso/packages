import { Children, isValidElement } from 'react';

export const cleanChildren = (children: React.ReactNode): Array<React.ReactNode> => {
	return Children.toArray(children).filter(isValidElement);
};
