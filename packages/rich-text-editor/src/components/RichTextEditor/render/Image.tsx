import { ImgHTMLAttributes } from 'react';

const Image: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({ src, alt, ...props }) => {
	return (
		<figure>
			<img src={src} alt={alt} {...props} />
		</figure>
	);
};

export default Image;
