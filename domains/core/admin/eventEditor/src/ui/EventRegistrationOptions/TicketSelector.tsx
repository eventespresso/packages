import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { GridItem, SwitchWithLabel } from '@eventespresso/ui-components';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'displayTicketSelector' | 'onTicketSelectorChange'> {}

const TicketSelector: React.FC<Props> = ({ displayTicketSelector: isChecked, onTicketSelectorChange }) => {
	const className = classNames('ee-event-ticket-container');
	const id = 'ee-event-registration-ticket-selector';

	return (
		<GridItem className={className} id={id} label={__('Ticket Selector')} size='micro'>
			<SwitchWithLabel
				aria-describedby={id}
				isChecked={isChecked}
				onChangeValue={onTicketSelectorChange}
				debounceDelay={5000}
			/>
		</GridItem>
	);
};

export default TicketSelector;
