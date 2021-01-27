import { DataStateProvider } from './DataStateProvider';

export const ContextProvider: React.FC = ({ children }) => {
	return <DataStateProvider>{children}</DataStateProvider>;
};
