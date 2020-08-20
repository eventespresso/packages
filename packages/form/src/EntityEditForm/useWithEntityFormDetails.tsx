import React from 'react';

import type { Datetime, Ticket } from '@eventespresso/edtr-services';
import type { BaseProps } from './types';
import EntityEditForm from './EntityEditForm';

/**
 * This HOC provides the current entity detail to the underlying component
 * in multi-step form by subscribing to RFF.
 */
export const useWithEntityFormDetails = <T extends Datetime | Ticket>(
	Component: React.ComponentType<Partial<BaseProps<T>>>,
	newEntityId: string
): JSX.Element => {
	return <EntityEditForm Component={Component} newEntityId={newEntityId} />;
};
