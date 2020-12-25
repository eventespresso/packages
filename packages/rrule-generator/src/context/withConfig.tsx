import { ConfigProviderProps, ConfigProvider } from './ConfigProvider';

const withConfig = <P extends ConfigProviderProps>(Component: React.ComponentType<P>): React.ComponentType<P> => {
	const WrappedComponent: React.ComponentType<P> = (props) => {
		return (
			<ConfigProvider config={props.config}>
				<Component {...props} />
			</ConfigProvider>
		);
	};
	return WrappedComponent;
};

export default withConfig;
