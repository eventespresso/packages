import { forwardRef } from 'react';
import { ToolbarItem as ReakitToolbarItem } from 'reakit/Toolbar';
import classNames from 'classnames';

import { Button, IconButton } from '@eventespresso/ui-components';
import type { IconComponent } from '@eventespresso/icons';

interface ToolbarItemProps extends React.ComponentProps<typeof ReakitToolbarItem> {
	isActive?: boolean;
	borderless?: boolean;
	icon?: IconComponent;
}

export const ToolbarItem = forwardRef<typeof ReakitToolbarItem, ToolbarItemProps>(({ isActive, ...props }, ref) => {
	const className = classNames(
		'ee-rich-text-editor__toolbar-item',
		isActive && 'ee-rich-text-editor__toolbar-item--active',
		props.className
	);

	const As = props?.icon ? IconButton : Button;

	return <ReakitToolbarItem as={As} {...props} ref={ref} className={className} />;
});

export default ToolbarItem;
