import { TabsProps } from '@eventespresso/adapters';

export type CollapsibleTabProps = {
	icon: React.ReactNode;
	id: string;
	title: React.ReactNode;
};

type CollapsibleTabRenderProps = CollapsibleTabProps & {
	isCollapsed?: boolean;
};

export type CollapsibleTabsProps = Partial<TabsProps> & {
	tabs: Array<CollapsibleTabProps>;
	renderTab?: (props: CollapsibleTabRenderProps) => React.ReactNode;
	renderPanel?: (props: CollapsibleTabRenderProps) => React.ReactNode;
};
