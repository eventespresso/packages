import { FlagsProvider } from 'flagged';

import { usePermissions } from '../permissions';

const FeaturesProvider: React.FC = ({ children }) => {
	const features = usePermissions();

	return <FlagsProvider features={features}>{children}</FlagsProvider>;
};

export default FeaturesProvider;
