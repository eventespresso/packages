import React, { useMemo } from 'react';
import { FlagsProvider, FeatureFlags } from 'flagged';
import { intersection } from 'ramda';

import { useSitePermissions, useUserCaps } from '../permissions';

const FeaturesProvider: React.FC = ({ children }) => {
	const sitePermissions = useSitePermissions();
	const userPermissions = useUserCaps();

	const features = useMemo<FeatureFlags>(() => {
		// set those permissions/features which are enabled for user as well as the site
		return intersection(userPermissions, sitePermissions);
	}, [sitePermissions, userPermissions]);

	return <FlagsProvider features={features}>{children}</FlagsProvider>;
};

export default FeaturesProvider;
