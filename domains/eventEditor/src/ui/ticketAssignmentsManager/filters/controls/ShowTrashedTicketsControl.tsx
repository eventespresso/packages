import React from 'react';
import { __ } from '@eventespresso/i18n';
import { Switch } from '@chakra-ui/core';

import { SwitchInput } from '@eventespresso/components';
import type { FilterStateManager } from '../filterState';

type ShowTrashedTicketsControlProps = Pick<FilterStateManager, 'showTrashedTickets' | 'setShowTrashedTickets'>;

const ShowTrashedTicketsControl: React.FC<ShowTrashedTicketsControlProps> = React.memo(
	({ showTrashedTickets, setShowTrashedTickets }) => {
		return (
			<>
				<Switch onChange={setShowTrashedTickets}>{__('show trashed tickets')}</Switch>
				<Switch aria-label={__('show trashed tickets')} onChange={setShowTrashedTickets} />
				<Switch color='red' />
				<Switch color='teal' size='lg' />
			</>
		);

		return (
			<SwitchInput
				label={__('show trashed tickets')}
				isChecked={showTrashedTickets}
				onChangeValue={setShowTrashedTickets}
			/>
		);
	}
);

export default ShowTrashedTicketsControl;
