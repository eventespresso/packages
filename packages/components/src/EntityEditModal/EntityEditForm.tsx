import React from 'react';
import { useForm } from '@eventespresso/form';

import { processDateAndTime } from '@eventespresso/edtr-services';
import { useTimeZoneTime } from '@eventespresso/services';
import { useMemoStringify } from '@eventespresso/hooks';
import { Entity } from '@eventespresso/data';
import type { BaseProps } from './types';

interface EntityEditFormProps {
	Component: React.ComponentType<Partial<BaseProps<Entity>>>;
	newEntityId: string;
}

const EntityEditForm: React.FC<EntityEditFormProps> = ({ Component, newEntityId }) => {
	const { siteTimeToUtc } = useTimeZoneTime();
	const { getState } = useForm<any>();

	const values = getState().values;
	const entity = useMemoStringify(
		{
			...values,
			id: values.id ?? newEntityId,
			dbId: values.dbId ?? 0,
			...processDateAndTime(values?.dateTime, siteTimeToUtc),
		},
		[values]
	);

	return <Component entity={entity} />;
};

export default EntityEditForm;
