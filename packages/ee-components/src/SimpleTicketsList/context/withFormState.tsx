import { FormProviderProps, FormProvider } from './FormStateProvider';

export const withFormState = <P extends FormProviderProps>(
	Component: React.ComponentType<P>
): React.ComponentType<P> => {
	const WrappedComponent: React.ComponentType<P> = (props) => {
		return (
			<FormProvider formState={props.formState}>
				<Component {...props} />
			</FormProvider>
		);
	};
	return WrappedComponent;
};
