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
				<Switch>{__('show trashed tickets')}</Switch>
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
