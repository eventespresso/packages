import React, { useMemo } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { GridItem, Select } from '@eventespresso/components';
import { datetimeStatus } from '@eventespresso/constants';
import { objectToSelectOptions } from '@eventespresso/utils';
import { datetimeStatusBgColorClassName } from '@eventespresso/helpers';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'status' | 'onStatusChange'> {}

const ActiveStatus: React.FC<Props> = ({ status, onStatusChange }) => {
	const bgColorClassName = datetimeStatusBgColorClassName(null);
	const className = classNames('ee-event-registration-options__status', bgColorClassName);

	const id = 'ee-event-registration-active-status';

	const options = useMemo(() => objectToSelectOptions(datetimeStatus), []);

	const input = <Select onChangeValue={onStatusChange} options={options} type='inline' value={status} />;

	return <GridItem className={className} id={id} input={input} label={__('Active status')} />;
};

export default ActiveStatus;
