import React from 'react';

import { getPropsAreEqual } from '@eventespresso/services';
import { useDatetimeMutator } from '@eventespresso/edtr-services';
import DateDetailsPanel from './DateDetailsPanel';
import { EditableDesc } from '../../../shared/editable';
import { EditableName } from '../editable';

import type { DateItemProps } from '../types';

const Details: React.FC<DateItemProps> = ({ entity: datetime }) => {
	const { updateEntity } = useDatetimeMutator(datetime.id);

	return (
		<>
			<EditableName className='entity-card-details__name' entity={datetime} />

			<EditableDesc description={datetime.description} updateEntity={updateEntity} />

			<DateDetailsPanel entity={datetime} />
		</>
	);
};

export default React.memo(Details, getPropsAreEqual(['entity', 'cacheId']));
