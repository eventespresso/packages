import React from 'react';
import { ApolloMockedProvider } from '../../../context/test';
import { EdtrStateProvider } from '../../../context';

const ApolloWrapper = ApolloMockedProvider();

const Wrapper: React.FC = ({ children }) => {
	return (
		<ApolloWrapper>
			<EdtrStateProvider>{children}</EdtrStateProvider>
		</ApolloWrapper>
	);
};

export default Wrapper;
