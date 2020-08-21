import React from 'react';

import { FormConfigProviderProps, FormConfigProvider } from './ConfigProvider';

const withConfig = <P extends FormConfigProviderProps>(Component: React.ComponentType<P>): React.ComponentType<P> => {
	const WrappedComponent: React.ComponentType<P> = (props) => {
		return (
			<FormConfigProvider config={props.config}>
				<Component {...props} />
			</FormConfigProvider>
		);
	};
	return WrappedComponent;
};

export default withConfig;
