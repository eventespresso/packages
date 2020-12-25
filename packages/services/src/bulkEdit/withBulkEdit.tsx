import type { AnyObject } from '@eventespresso/utils';
import { BulkEditProvider } from './BulkEditProvider';

export const withBulkEdit = <P extends AnyObject>(Component: React.ComponentType<P>): React.FC<P> => {
	const WrappedComponent: React.FC<P> = (props) => {
		return (
			<BulkEditProvider>
				<Component {...props} />
			</BulkEditProvider>
		);
	};

	return WrappedComponent;
};
