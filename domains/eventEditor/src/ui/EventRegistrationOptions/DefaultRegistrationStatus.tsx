import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { GridItem, Select } from '@eventespresso/ui-components';
import { regStatusOptions } from '@eventespresso/predicates';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'defaultRegStatus' | 'onDefaultRegStatusChange'> {}

const DefaultRegistrationStatus: React.FC<Props> = ({ defaultRegStatus, onDefaultRegStatusChange }) => {
	const className = classNames('ee-status-background', 'ee-status-background-color-RAP');
	const id = 'ee-event-registration-default-status';

	return (
		<GridItem className={className} id={id} label={__('Default Registration Status')}>
			<div className='ee-reg-option__value'>
				<Select
					flow='inline'
					onChangeValue={onDefaultRegStatusChange}
					options={regStatusOptions}
					value={defaultRegStatus}
				/>
			</div>
		</GridItem>
	);
};

export default DefaultRegistrationStatus;
