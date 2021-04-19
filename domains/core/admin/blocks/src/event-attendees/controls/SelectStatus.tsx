import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { AttendeesEditProps } from '../types';
import RegStatusControl from '@blocksComponents/RegStatusControl';

const SelectStatus: React.FC<AttendeesEditProps> = ({ attributes, setAttributes }) => {
	const { status } = attributes;

	const setStatus = useCallback((status): void => setAttributes({ status }), [setAttributes]);

	return <RegStatusControl label={__('Select Registration Status')} status={status} setStatus={setStatus} />;
};

export default SelectStatus;
