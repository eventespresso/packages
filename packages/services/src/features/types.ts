import type { ComponentType, ReactNode } from 'react';

import { Capability } from '../permissions';

export interface FeatureProps {
	name: Capability;
	children?: ReactNode | ((hasFeature: boolean) => JSX.Element);
	render?: ReactNode | ((hasFeature: boolean) => JSX.Element);
}

export type WithFeature = (capability: Capability) => <P>(Component: ComponentType<P>) => ComponentType<P>;
