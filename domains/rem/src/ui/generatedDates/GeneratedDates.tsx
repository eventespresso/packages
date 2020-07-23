import React from 'react';

import { Heading } from '@eventespresso/adapters';
import { Legend } from '@eventespresso/components';

import Datetimes from './Datetimes';
import { generateDatetimes } from '../../utils';
import { useFormState } from '../../data';
import { legendConfig } from './config';

const GeneratedDates: React.FC = () => {
	const { getData } = useFormState();

	const { exRule, rRule, exDates, rDates } = getData();

	const datetimes = generateDatetimes(rRule, exRule, rDates, exDates);

	return (
		<>
			<Datetimes datetimes={datetimes} />
			<Heading as='h5'>Legend</Heading>
			<Legend legendConfig={legendConfig} />
		</>
	);
};

export default GeneratedDates;
