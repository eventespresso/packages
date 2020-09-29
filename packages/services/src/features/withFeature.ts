import { withFeature as withFlaggedFeature } from 'flagged';

import { WithFeature } from './types';

const withFeature: WithFeature = (capability) => {
	return withFlaggedFeature(capability);
};

export default withFeature;
