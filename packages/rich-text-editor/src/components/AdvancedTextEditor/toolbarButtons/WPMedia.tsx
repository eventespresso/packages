import { useCallback, useEffect } from 'react';

import { __ } from '@eventespresso/i18n';

import { ToolbarItemProps, ToolbarItem } from '../../RichTextEditor';

const wpMedia = window?.wp?.media?.({
	title: __('Select media'),
	button: {
		text: __('Select'),
	},
	multiple: false,
	library: {
		type: ['image'],
	},
});

const openMediaModal = () => wpMedia?.open?.();

export const WPMedia: React.FC<ToolbarItemProps<'image'>> = ({ onChange, config, toolbar }) => {
	const mediaHandler = useCallback(() => {
		const attachment = wpMedia?.state()?.get('selection')?.first()?.toJSON();

		const { alt, height, url, width } = attachment;

		onChange('', { src: url, height: `${height}px`, width: `${width}px`, alt });
	}, [onChange]);

	useEffect(() => {
		// de-register the previous listener.
		wpMedia?.off('select', mediaHandler);

		wpMedia?.on('select', mediaHandler);

		return () => wpMedia?.off('select', mediaHandler);
	}, [mediaHandler]);

	return <ToolbarItem {...toolbar} onClick={openMediaModal} icon={config?.icon} />;
};

export default WPMedia;
