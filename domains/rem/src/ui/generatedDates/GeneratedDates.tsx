import React from 'react';
import { __ } from '@wordpress/i18n';

import { Heading, Legend } from '@eventespresso/components';

import Datetimes from './Datetimes';
import useGenerateDates from './useGenerateDates';
import { legendConfig } from './config';

const GeneratedDates: React.FC = () => {
	const datetimes = useGenerateDates(true);

	return (
		<>
			<Datetimes datetimes={datetimes} />
			<Heading as='h6' topBordered>
				{__('Legend')}
			</Heading>
			<Legend direction='row' legendConfig={legendConfig} />
		</>
	);
};

export default GeneratedDates;
