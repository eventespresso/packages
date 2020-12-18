import React from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { GridItem, Select } from '@eventespresso/components';
import { regStatusOptions } from '@eventespresso/predicates';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'defaultRegStatus' | 'onDefaultRegStatusChange'> {}

const DefaultRegistrationStatus: React.FC<Props> = ({ defaultRegStatus, onDefaultRegStatusChange }) => {
	const className = classNames('ee-event-registration-options__status', 'ee-status-background-color-RAP');
	const id = 'ee-event-registration-default-status';

	const input = (
		<Select
			onChangeValue={onDefaultRegStatusChange}
			options={regStatusOptions}
			type='inline'
			value={defaultRegStatus}
		/>
	);

	return <GridItem className={className} id={id} input={input} label={__('Default Registration Status')} />;
};

export default DefaultRegistrationStatus;
