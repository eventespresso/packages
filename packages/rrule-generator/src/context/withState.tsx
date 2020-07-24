import React from 'react';
import { StateProvider } from './StateProvider';

const withState = <P extends any>(Component: React.ComponentType<P>): React.ComponentType<P> => {
	const WrappedComponent: React.ComponentType<P> = (props) => {
		return (
			<StateProvider>
				<Component {...props} />
			</StateProvider>
		);
	};
	return WrappedComponent;
};

export default withState;
