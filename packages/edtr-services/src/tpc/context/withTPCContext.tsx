import type { AnyObject } from '@eventespresso/utils';
import { TPCContextProvider } from './TPCContextProvider';
import type { WithContextProps } from './types';

export const withTPCContext = <P extends AnyObject>(
	Component: React.ComponentType<P>,
	contextProps: WithContextProps
): React.FC<P> => {
	const WrappedComponent: React.FC<P> = (props) => {
		return (
			<TPCContextProvider {...contextProps}>
				<Component {...props} />
			</TPCContextProvider>
		);
	};

	return WrappedComponent;
};
