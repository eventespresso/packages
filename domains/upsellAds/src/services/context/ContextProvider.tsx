import { DataProvider } from '@eventespresso/data';
import { ThemeProvider } from '@eventespresso/adapters';

export const ServiceProvider: React.FC = ({ children }) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};

export const ContextProvider: React.FC = ({ children }) => (
	<DataProvider>
		<ServiceProvider>{children}</ServiceProvider>
	</DataProvider>
);
