import React from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { GridItem, Heading, Select } from '@eventespresso/components';
import { regStatusOptions } from '@eventespresso/predicates';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'defaultRegStatus' | 'onDefaultRegStatusChange'> {}

const DefaultRegistrationStatus: React.FC<Props> = ({ defaultRegStatus, onDefaultRegStatusChange }) => {
	const className = classNames('ee-status-background', 'ee-status-background-color-RAP');
	const id = 'ee-event-registration-default-status';

	return (
		<GridItem className={className} id={id} label={__('Default Registration Status')}>
			<Heading as='h4' className={'ee-status-heading'}>
				<Select
					onChangeValue={onDefaultRegStatusChange}
					options={regStatusOptions}
					type='inline'
					value={defaultRegStatus}
				/>
			</Heading>
		</GridItem>
	);
};

export default DefaultRegistrationStatus;
