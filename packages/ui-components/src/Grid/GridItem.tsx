import classNames from 'classnames';

import type { GridItemProps } from './types';

export const GridItem: React.FC<GridItemProps> = ({ children, id, label, labelLink, url, size, ...props }) => {
	const className = classNames('ee-grid__item', size && `ee-grid__item--size-${size}`, props.className);

	return (
		<div className={className}>
			<div className='ee-grid__item-wrapper'>
				<label className='ee-grid__item-label' id={id}>
					{label}
				</label>
				{ labelLink && 
					<a href={url} className='ee-grid__item-label ee-grid__item-link' target='_blank'>
						{labelLink}
					</a> 
				}
			</div>
			{children}
		</div>
	);
};
