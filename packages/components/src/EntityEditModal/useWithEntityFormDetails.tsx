import React from 'react';

import type { Entity } from '@eventespresso/data';
import type { BaseProps } from './types';
import EntityEditForm from './EntityEditForm';

/**
 * This HOC provides the current entity detail to the underlying component
 * in multi-step form by subscribing to RFF.
 */
const useWithEntityFormDetails = (
	Component: React.ComponentType<Partial<BaseProps<Entity>>>,
	newEntityId: string
): JSX.Element => {
	return <EntityEditForm Component={Component} newEntityId={newEntityId} />;
};

export default useWithEntityFormDetails;
