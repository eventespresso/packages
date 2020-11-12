import React from 'react';
import { StateProvider, StateProviderProps } from './StateProvider';

const withState = <P extends StateProviderProps>(Component: React.ComponentType<P>): React.ComponentType<P> => {
	const WrappedComponent: React.ComponentType<P> = (props) => {
		return (
			<StateProvider value={props.value} onChange={props.onChange}>
				<Component {...props} />
			</StateProvider>
		);
	};
	return WrappedComponent;
};

export default withState;