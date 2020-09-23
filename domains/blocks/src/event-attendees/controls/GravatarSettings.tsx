import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';
import { RangeControl, ToggleControl } from '@wordpress/components';

import { AttendeesEditProps } from '../types';

const GravatarSettings: React.FC<AttendeesEditProps> = ({
	attributes: { avatarSize, showGravatar },
	setAttributes,
}) => {
	const onChangeShowGravatar = useCallback(
		(newShowGravatar): void => {
			setAttributes({ showGravatar: newShowGravatar });
		},
		[setAttributes]
	);
	const onChangeAvatarSize = useCallback(
		(newAvatarSize): void => {
			setAttributes({ avatarSize: newAvatarSize });
		},
		[setAttributes]
	);
	return (
		<>
			<ToggleControl
				label={__('Display Gravatar')}
				checked={showGravatar}
				onChange={onChangeShowGravatar}
				help={
					showGravatar
						? __('Gravatar images are shown for each attendee.')
						: __('No gravatar images are shown for each attendee.')
				}
			/>
			{showGravatar && (
				<RangeControl
					label={__('Size of Gravatar')}
					value={avatarSize}
					min={10}
					max={128}
					onChange={onChangeAvatarSize}
				/>
			)}
		</>
	);
};

export default GravatarSettings;
