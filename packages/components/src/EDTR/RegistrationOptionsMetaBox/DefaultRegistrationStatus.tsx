import React /* , { useCallback } */ from 'react';

import { __ } from '@eventespresso/i18n';
import { noop } from '@eventespresso/utils';
import { GridItem, Select } from '../../';
import { regStatusOptions } from '@eventespresso/predicates';

const DefaultRegistrationStatus: React.FC = () => {
	const id = 'ee-event-registration-default-status';

	const input = (
		<Select onChangeValue={noop} options={regStatusOptions} type='inline' value={regStatusOptions[0].value} />
	);

	return <GridItem id={id} input={input} label={__('Default Registration Status')} />;
};

export default DefaultRegistrationStatus;
