import React from 'react';
import { __ } from '@wordpress/i18n';

import { Heading } from '@eventespresso/adapters';
import { Legend } from '@eventespresso/components';

import Datetimes from './Datetimes';
import useGenerateDatetimes from './useGenerateDatetimes';
import { legendConfig } from './config';

const GeneratedDates: React.FC = () => {
	const datetimes = useGenerateDatetimes(true);

	return (
		<>
			<Datetimes datetimes={datetimes} />
			<Heading as='h5'>{__('Legend')}</Heading>
			<Legend direction='row' legendConfig={legendConfig} />
		</>
	);
};

export default GeneratedDates;
