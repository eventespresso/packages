import type { InlineEditProps } from '../InlineEdit/InlineEditInput/types';

export interface TabbableTextProps extends Pick<InlineEditProps, 'data-testid'> {
	'aria-describedby'?: string;
	className?: string;
	icon?: React.ReactNode;
	isDisabled?: boolean;
	onClick: VoidFunction;
	text?: string | JSX.Element;
	tooltip?: string;
}
