import { forwardRef } from 'react';
import { ToolbarItem as ReakitToolbarItem } from 'reakit/Toolbar';
import classNames from 'classnames';

import { Button } from '@eventespresso/ui-components';

interface ToolbarItemProps extends React.ComponentProps<typeof ReakitToolbarItem> {
	isActive?: boolean;
}

export const ToolbarItem = forwardRef<typeof ReakitToolbarItem, ToolbarItemProps>(({ isActive, ...props }, ref) => {
	const className = classNames(
		'ee-rich-text-editor__toolbar-item',
		isActive && 'ee-rich-text-editor__toolbar-item--active',
		props.className
	);

	return <ReakitToolbarItem as={Button} {...props} ref={ref} className={className} />;
});

export default ToolbarItem;
