import React from 'react';

import { useForm } from '@eventespresso/form';
import { useSiteDateToUtcISO } from '@eventespresso/services';
import { useMemoStringify } from '@eventespresso/hooks';
import { Entity } from '@eventespresso/data';
import type { BaseProps } from './types';

interface EntityEditFormProps {
	Component: React.ComponentType<Partial<BaseProps<Entity>>>;
	newEntityId: string;
}

const EntityEditForm: React.FC<EntityEditFormProps> = ({ Component, newEntityId }) => {
	const { getState } = useForm<any>();
	const toUtcISO = useSiteDateToUtcISO();

	const values = getState().values;
	const entity = useMemoStringify(
		{
			...values,
			id: values.id ?? newEntityId,
			dbId: values.dbId ?? 0,
			startDate: values?.startDate ? toUtcISO(values.startDate) : '',
			endDate: values?.endDate ? toUtcISO(values.endDate) : '',
		},
		[values]
	);

	return <Component entity={entity} />;
};

export default EntityEditForm;
