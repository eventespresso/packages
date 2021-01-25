import { Image } from './Image';
import { BlockComponentProps } from './types';

const Media: React.FC<BlockComponentProps> = (props) => {
	const { block, contentState } = props;
	const entity = contentState.getEntity(block.getEntityAt(0));
	const type = entity.getType();

	if (type === 'IMAGE') {
		const { src, alt, height, width, alignment } = entity.getData();

		return <Image {...props} src={src} alt={alt} align={alignment} height={height} width={width} />;
	}

	return <></>;
};

export default Media;
