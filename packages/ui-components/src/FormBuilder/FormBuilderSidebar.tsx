import { __ } from '@eventespresso/i18n';
import { InfoCircleFilled } from '@eventespresso/icons';

import { Heading } from '../Heading';
import { Tooltip } from '../Tooltip';
import { ELEMENT_BLOCKS } from './constants';

export const FormBuilderSidebar = () => {
	const tags = ELEMENT_BLOCKS.map((tag, index) => {
		const tooltip = tag?.desc && (
			<Tooltip placement='top' tooltip={tag?.desc}>
				<span>
					<InfoCircleFilled aria-label={tag?.desc} size='small' />
				</span>
			</Tooltip>
		);
		return (
			<div key={index} className='element-block'>
				<span>{tag.label}</span>
				{tooltip}
			</div>
		);
	});
	return (
		<>
			<Heading as='h5'>{__('Form Elements')}</Heading>
			<div className='form-element-blocks'>{tags}</div>
		</>
	);
};
