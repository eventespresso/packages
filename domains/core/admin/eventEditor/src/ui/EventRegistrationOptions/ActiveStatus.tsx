import { useMemo } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { GridItem, SelectWithLabel } from '@eventespresso/ui-components';
import { datetimeStatus } from '@eventespresso/constants';
import { objectToSelectOptions } from '@eventespresso/utils';
import { datetimeStatusBgColorClassName } from '@eventespresso/helpers';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'status' | 'onStatusChange'> {}

const ActiveStatus: React.FC<Props> = ({ status, onStatusChange }) => {
	const bgColorClassName = datetimeStatusBgColorClassName(null);
	const className = classNames('ee-status-background', bgColorClassName);

	const id = 'ee-event-registration-active-status';

	const options = useMemo(() => objectToSelectOptions(datetimeStatus), []);

	return (
		<GridItem className={className} id={id} label={__('Event Active Status')} size='default'>
			<div className='ee-reg-option__value'>
				<SelectWithLabel
					flow='inline'
					id={`${id}-select`}
					noBorderColor
					onChangeValue={onStatusChange}
					options={options}
					value={status}
				/>
			</div>
		</GridItem>
	);
};

export default ActiveStatus;
