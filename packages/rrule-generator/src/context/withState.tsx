import React from 'react';
import { StateProviderProps, StateProvider } from './StateProvider';

const withState = <P extends StateProviderProps>(Component: React.ComponentType<P>): React.ComponentType<P> => {
	const WrappedComponent: React.ComponentType<P> = (props) => {
		return (
			<StateProvider config={props.config}>
				<Component {...props} />
			</StateProvider>
		);
	};
	return WrappedComponent;
};

export default withState;
