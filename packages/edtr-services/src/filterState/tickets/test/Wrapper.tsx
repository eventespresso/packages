import { ApolloMockedProvider } from '../../../context/test';

const ApolloWrapper = ApolloMockedProvider();

const Wrapper: React.FC = ({ children }) => {
	return <ApolloWrapper>{children}</ApolloWrapper>;
};

export default Wrapper;
