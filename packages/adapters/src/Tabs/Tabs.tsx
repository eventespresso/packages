import { Tabs as ChakraTabs } from '@chakra-ui/react';
import classNames from 'classnames';

import type { TabsProps } from './types';

export const Tabs: React.FC<TabsProps> = ({ wrapperClassName, ...props }) => {
	const className = classNames(props.className, 'ee-tabs');
	const newWrapperClassName = classNames(wrapperClassName, 'ee-tabs-wrapper');

	return (
		<div className={newWrapperClassName}>
			<ChakraTabs isLazy {...props} className={className} />
		</div>
	);
};
