import classNames from 'classnames';

import { Popover, PopoverProps } from '@eventespresso/ui-components';

export const ToolbarPopover: React.FC<PopoverProps> = (props) => {
	const className = classNames('ee-rich-text-editor__toolbar-popover', props.className);

	return <Popover {...props} className={className} />;
};
