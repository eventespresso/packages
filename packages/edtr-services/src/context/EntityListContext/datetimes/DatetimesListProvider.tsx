import { DatesFilterStateProvider } from './DatesFilterStateProvider';
import { FilteredDatesProvider } from './FilteredDatesProvider';

export const DatetimesListProvider: React.FC = ({ children }) => {
	return (
		<DatesFilterStateProvider>
			<FilteredDatesProvider>{children}</FilteredDatesProvider>
		</DatesFilterStateProvider>
	);
};
