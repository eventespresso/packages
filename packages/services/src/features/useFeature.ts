import { useFeature as useFlaggedFeature } from 'flagged';

import { Capability } from '../permissions';

const useFeature = (capability: Capability): boolean => {
	return useFlaggedFeature(capability) as boolean;
};

export default useFeature;
