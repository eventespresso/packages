import type { AnyObject } from '@eventespresso/utils';

import { FormStateProvider, FormStateProviderProps } from './FormStateProvider';

export const withFormState = <P extends AnyObject>(
	Component: React.ComponentType<P>
): React.ComponentType<P & FormStateProviderProps> => {
	return function WrappedComponent(props: P & FormStateProviderProps) {
		return (
			<FormStateProvider {...props}>
				<Component {...props} />
			</FormStateProvider>
		);
	};
};
