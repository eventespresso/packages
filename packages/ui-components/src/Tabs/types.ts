import type {
	TabAdapterProps,
	TabsAdapterProps,
	TabListAdapterProps,
	TabPanelAdapterProps,
	TabPanelsAdapterProps,
} from '@eventespresso/adapters';

export interface TabProps extends TabAdapterProps {}

export interface TabsProps extends TabsAdapterProps {
	wrapperClassName?: string;
}

export interface TabListProps extends TabListAdapterProps {}

export interface TabPanelProps extends TabPanelAdapterProps {}

export interface TabPanelsProps extends TabPanelsAdapterProps {}
