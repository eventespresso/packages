import type { Component, ComponentType, Consumer as ContextConsumer } from 'react';

import type { SlotComponent } from './slot';
import type { FillComponent } from './fill';

export interface SlotFillContext {
	registerSlot(name: string, instance: Component): void;
	unregisterSlot(name: string, instance: Component): void;
	registerFill(name: string, instance: Component): void;
	unregisterFill(name: string, instance: Component): void;
	getSlot(name: string): SlotComponent;
	getFills(
		name: string,
		instance: SlotComponent
	): ReadonlyArray<
		typeof FillComponent & {
			occurrence?: number;
			children: React.ReactNode | ((props: FillRenderProps) => JSX.Element);
		}
	>;
	subscribe(listener: VoidFunction): void;
}

export type SlotFillProvider = ComponentType;

export type Consumer = ContextConsumer<SlotFillContext>;

export default SlotFillProvider;

export interface SlotProps {
	name?: string;
	children?(fills: ReadonlyArray<readonly JSX.Element[]>): JSX.Element | null;
	bubblesVirtually?: boolean;
	fillProps?: FillRenderProps;
}

export interface FillRenderProps {
	count?: number;
	[k: string]: any;
}

export interface FillProps {
	children?: JSX.Element | ((props: FillRenderProps) => JSX.Element);
	name?: string;
	priority?: number;
}
