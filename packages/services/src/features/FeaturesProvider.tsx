import React, { useMemo } from 'react';
import { FlagsProvider, FeatureFlags } from 'flagged';
import { concat, uniq } from 'ramda';

import { useSitePermissions, useUserCapabilities } from '../permissions';

const FeaturesProvider: React.FC = ({ children }) => {
	const sitePermissions = useSitePermissions();
	const userPermissions = useUserCapabilities();

	const features = useMemo<FeatureFlags>(() => {
		// set those permissions/features which are enabled for user as well as the site
		return uniq(concat(userPermissions, sitePermissions));
	}, [sitePermissions, userPermissions]);

	return <FlagsProvider features={features}>{children}</FlagsProvider>;
};

export default FeaturesProvider;
