import { DataProvider } from '@eventespresso/data';
import { ThemeProvider } from '@eventespresso/adapters';
import { SlotFillProvider } from '@eventespresso/slot-fill';
import { ConfigProvider, FeaturesProvider, RelationsProvider, StatusProvider } from '@eventespresso/services';
import { GlobalModalProvider } from '@eventespresso/registry';

export const ServiceProvider: React.FC = ({ children }) => {
	return (
		<ThemeProvider>
			<StatusProvider>
				<ConfigProvider>
					<FeaturesProvider>
						<RelationsProvider>
							<SlotFillProvider>
								<GlobalModalProvider>{children}</GlobalModalProvider>
							</SlotFillProvider>
						</RelationsProvider>
					</FeaturesProvider>
				</ConfigProvider>
			</StatusProvider>
		</ThemeProvider>
	);
};

export const ContextProvider: React.FC = ({ children }) => (
	<DataProvider>
		<ServiceProvider>{children}</ServiceProvider>
	</DataProvider>
);
