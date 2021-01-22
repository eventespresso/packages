import { ConfigProviderProps, ConfigProvider } from './FormStateProvider';

export const withFormState = <P extends ConfigProviderProps>(
	Component: React.ComponentType<P>
): React.ComponentType<P> => {
	const WrappedComponent: React.ComponentType<P> = (props) => {
		return (
			<ConfigProvider formState={props.formState}>
				<Component {...props} />
			</ConfigProvider>
		);
	};
	return WrappedComponent;
};
