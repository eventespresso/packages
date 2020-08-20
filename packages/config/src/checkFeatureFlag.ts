// avoid package dependecy upon `services`
import toBoolean from '../../services/src/utilities/converters/toBoolean';

export const FEATURE_FLAGS = {
	bulkEdit: process.env.FF_BULK_EDIT,
};

type Feature = keyof typeof FEATURE_FLAGS;

export const checkFeatureFlag = (feature: Feature): boolean => {
	return toBoolean(FEATURE_FLAGS?.[feature]);
};
