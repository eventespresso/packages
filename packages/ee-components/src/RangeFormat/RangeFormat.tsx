import { RangeFormat as RangeFormatAdapter } from '@eventespresso/dates';
import { useTimeZoneTime } from '@eventespresso/services';

export const RangeFormat: typeof RangeFormatAdapter = (props) => {
	const { formatForSite } = useTimeZoneTime();

	return <RangeFormatAdapter formatFn={formatForSite} {...props} />;
};
