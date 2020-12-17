import React from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { noop } from '@eventespresso/utils';
import { GridItem, Select } from '@eventespresso/components';
import { regStatusOptions } from '@eventespresso/predicates';

const DefaultRegistrationStatus: React.FC = () => {
	const className = classNames('ee-event-registration-options__status', 'ee-status-background-color-RAP');
	const id = 'ee-event-registration-default-status';

	const input = (
		<Select onChangeValue={noop} options={regStatusOptions} type='inline' value={regStatusOptions[0].value} />
	);

	return <GridItem className={className} id={id} input={input} label={__('Default Registration Status')} />;
};

export default DefaultRegistrationStatus;
