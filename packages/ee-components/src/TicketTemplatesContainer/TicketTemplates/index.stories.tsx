import type { Meta } from '@storybook/react/types-6-0';

import { withDataProvider } from '@eventespresso/data';
// import { nodes as tickets } from '@eventespresso/edtr-services/src/apollo/queries/tickets/test/data';
// import { FormStateProvider } from '../../context';
// import Tickets from './';

export default {
	argTypes: {},
	title: 'Components/REM/Tickets',
} as Meta;

export const Default = withDataProvider(() => {
	return null;
	// return (
	// 	<FormStateProvider>
	// 		<Tickets defaultTickets={tickets} />
	// 	</FormStateProvider>
	// );
});
