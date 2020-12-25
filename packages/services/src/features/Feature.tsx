import { Feature as FlaggedFeature } from 'flagged';

import { FeatureProps } from './types';

const Feature: React.FC<FeatureProps> = (props) => {
	return <FlaggedFeature {...props} />;
};

export default Feature;
