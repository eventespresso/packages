import { TicketsFilterStateProvider } from './TicketsFilterStateProvider';
import { FilteredTicketsProvider } from './FilteredTicketsProvider';

export const TicketsListProvider: React.FC = ({ children }) => {
	return (
		<TicketsFilterStateProvider>
			<FilteredTicketsProvider>{children}</FilteredTicketsProvider>
		</TicketsFilterStateProvider>
	);
};
