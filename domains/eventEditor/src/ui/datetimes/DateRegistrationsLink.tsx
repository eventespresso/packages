import React from 'react';

import { __ } from '@eventespresso/i18n';
import type { Datetime } from '@eventespresso/edtr-services';
import { RegistrationsLink } from '@eventespresso/components';
import { useRegistrationsLink } from '@eventespresso/edtr-services';

interface Props {
	datetime: Datetime;
}

const tooltipProps = { placement: 'top' as const };

const DateRegistrationsLink: React.FC<Props> = ({ datetime }) => {
	const regListUrl = useRegistrationsLink({ datetime_id: datetime.dbId });

	const tooltip = __('view ALL registrations for this date.');

	return <RegistrationsLink href={regListUrl} tooltip={tooltip} tooltipProps={tooltipProps} />;
};

export default DateRegistrationsLink;
