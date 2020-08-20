export const featureFlags = {
	bulkEdit: process.env.FF_BULK_EDIT,
};

type Feature = 'bulkEdit' | '';

export const checkFeatureFlag = (feature: Feature): boolean => {
	return featureFlags[feature];
};
