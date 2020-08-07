import { useCallback } from 'react';
import { useMutationWithFeedback, MutationType } from '@eventespresso/data';
import gql from 'graphql-tag';

import type { EntityId } from '@eventespresso/data';
import { TypeName } from './';
import { useSystemNotifications } from '@eventespresso/toaster';

interface BulkDeleteEntitiesProps {
	entityType: 'DATETIME' | 'TICKET';
	typeName: TypeName;
}

interface CallbackArgs {
	entityIds: Array<EntityId>;
	deletePermanently?: boolean;
	updateEntityList: VoidFunction;
}

type Callback = (args: CallbackArgs) => void;

const BULK_DELETE_ENTITIES = gql`
	mutation BULK_DELETE_ENTITIES($input: BulkDeleteEspressoEntitiesInput!) {
		bulkDeleteEspressoEntities(input: $input) {
			deleted
			failed
		}
	}
`;

const useBulkDeleteEntities = ({ entityType, typeName }: BulkDeleteEntitiesProps): Callback => {
	const toaster = useSystemNotifications();
	const bulkDelete = useMutationWithFeedback({
		typeName,
		mutationType: MutationType.Delete,
		mutation: BULK_DELETE_ENTITIES,
		toaster,
	});

	return useCallback<Callback>(
		({ entityIds, deletePermanently, updateEntityList }) => {
			return bulkDelete({
				variables: {
					input: {
						clientMutationId: 'BULK_DELETE_ENTITIES',
						entityIds,
						entityType,
						deletePermanently,
					},
				},
				update: updateEntityList,
			});
		},
		[bulkDelete, entityType]
	);
};

export default useBulkDeleteEntities;
