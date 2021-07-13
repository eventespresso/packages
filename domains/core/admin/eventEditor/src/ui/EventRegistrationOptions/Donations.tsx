import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { GridItem, SwitchWithLabel } from '@eventespresso/ui-components';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'allowDonations' | 'onDonationsChange'> {}

const Donations: React.FC<Props> = ({ allowDonations: isChecked, onDonationsChange }) => {
	const className = classNames('ee-event-donation-container');
	const id = 'ee-event-donations';

	return (
		<GridItem className={className} id={id} label={__('Donations')} size='default'>
			<SwitchWithLabel
				aria-describedby={id}
				isChecked={isChecked}
				onChangeValue={onDonationsChange}
				debounceDelay={5000}
			/>
		</GridItem>
	);
};

export default Donations;