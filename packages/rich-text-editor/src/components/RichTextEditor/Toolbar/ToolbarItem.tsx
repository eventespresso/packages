import { forwardRef } from 'react';
import { ToolbarItem as ReakitToolbarItem } from 'reakit/Toolbar';
import classNames from 'classnames';

import type { IconComponent } from '@eventespresso/icons';

interface ToolbarItemProps extends React.ComponentProps<typeof ReakitToolbarItem> {
	as: any;
	borderless?: boolean;
	icon?: IconComponent;
	isActive?: boolean;
}

export const ToolbarItem = forwardRef<typeof ReakitToolbarItem, ToolbarItemProps>(({ as, isActive, ...props }, ref) => {
	const className = classNames(
		'ee-rich-text-editor__toolbar-item',
		isActive && 'ee-rich-text-editor__toolbar-item--active',
		props.className
	);

	return <ReakitToolbarItem as={as} {...props} ref={ref} className={className} />;
});

export default ToolbarItem;
