import { isInfinite } from '@eventespresso/utils';

import Preview from './Preview';
import type { PreviewProps } from './types';

const InlineEditInfinityPreview: React.FC<PreviewProps> = ({ value, ...props }) => {
	const isInfinity = isInfinite(value);
	const previewClassName = isInfinity ? 'ee-infinity-sign__inner' : '';
	const previewText = isInfinity ? '∞' : value;

	return <Preview {...props} value={previewText} className={previewClassName} />;
};

export default InlineEditInfinityPreview;
