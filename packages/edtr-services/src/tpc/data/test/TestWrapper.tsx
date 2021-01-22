import { ApolloMockedProvider } from '../../../context/test';
import { TPCContextProvider } from '../../';
import { nodes as tickets } from '../../../apollo/queries/tickets/test/data';
import { useCacheRehydration } from '../../../';
import { useTPCInitStateListeners } from '../../stateListeners/useTPCInitStateListeners';

const mockTicket = tickets[0];

const TPCComponent: React.FC = ({ children }) => {
	useTPCInitStateListeners();
	return <>{children}</>;
};

const TPCWrapper: React.FC = ({ children }) => {
	// cache must be rehydrated before TPC gets initialized
	useCacheRehydration();
	return (
		<TPCContextProvider ticketId={mockTicket.id}>
			<TPCComponent>{children}</TPCComponent>
		</TPCContextProvider>
	);
};

const ApolloWrapper = ApolloMockedProvider();

const TestWrapper: React.FC = ({ children }) => {
	return (
		<ApolloWrapper>
			<TPCWrapper>{children}</TPCWrapper>
		</ApolloWrapper>
	);
};

export default TestWrapper;
