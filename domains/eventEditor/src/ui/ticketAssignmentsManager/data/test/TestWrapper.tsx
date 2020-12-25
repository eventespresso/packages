import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { ContextProvider, ProviderProps } from '../../context';

const ApolloWrapper = ApolloMockedProvider();

const TestWrapper = (props: ProviderProps): React.FC => ({ children }) => {
	return (
		<ApolloWrapper>
			<ContextProvider {...props}>{children}</ContextProvider>
		</ApolloWrapper>
	);
};

export default TestWrapper;
