import React from 'react';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { EdtrStateProvider } from '../../../context/EdtrStateContext';

const ApolloWrapper = ApolloMockedProvider();

const Wrapper: React.FC = ({ children }) => {
	return (
		<ApolloWrapper>
			<EdtrStateProvider>{children}</EdtrStateProvider>
		</ApolloWrapper>
	);
};

export default Wrapper;
