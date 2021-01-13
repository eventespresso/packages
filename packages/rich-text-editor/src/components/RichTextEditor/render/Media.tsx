import Image from './Image';
import { BlockComponentProps } from './types';

const Media: React.FC<BlockComponentProps> = ({ block, contentState }) => {
	const entity = contentState.getEntity(block.getEntityAt(0));
	const type = entity.getType();

	if (type === 'IMAGE') {
		const { src, alt, height, width } = entity.getData();

		return <Image src={src} alt={alt} height={height} width={width} />;
	}

	return <></>;
};

export default Media;
