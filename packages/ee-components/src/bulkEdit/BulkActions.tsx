import React from 'react';

import { useBulkEdit } from '@eventespresso/services';

import { BulkActions as BulkActionsUI, BulkActionsProps } from '@eventespresso/components';

export const BulkActions = <T extends string>(props: BulkActionsProps<T>): JSX.Element => {
	const { getSelected } = useBulkEdit();

	const isApplyDisabled = Boolean(getSelected().length);

	return <BulkActionsUI {...props} isApplyDisabled={isApplyDisabled} />;
};
