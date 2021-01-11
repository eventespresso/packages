import { forwardRef } from 'react';
import { ToolbarItem as ReakitToolbarItem } from 'reakit/Toolbar';

import { Button } from '@eventespresso/ui-components';

export const ToolbarItem = forwardRef<typeof ReakitToolbarItem, React.ComponentProps<typeof ReakitToolbarItem>>(
	(props, ref) => {
		return <ReakitToolbarItem as={Button} {...props} ref={ref} />;
	}
);
