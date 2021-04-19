import { CSSProperties, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';

interface AvatarImageProps {
	altText?: string;
	className?: string;
	height?: number;
	url: string;
	width?: number;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ className = 'contact', url, altText, height = 32, width = 32 }) => {
	const style = useMemo<CSSProperties>(
		() => ({
			height,
			width,
		}),
		[height, width]
	);
	return url ? (
		<div className={className + '-image-wrap-div'}>
			<img
				className={className + '-avatar-img avatar'}
				src={url}
				style={style}
				alt={altText || __('contact avatar')}
			/>
		</div>
	) : null;
};

export default AvatarImage;
