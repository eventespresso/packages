import { forwardRef } from 'react';
import classNames from 'classnames';

import { __, sprintf } from '@eventespresso/i18n';
import { Close } from '@eventespresso/icons';
import type { FilterTagProps } from '../types';

import './styles.scss';

const FilterTag = forwardRef<HTMLSpanElement, FilterTagProps>(({ title, onRemove, children, ...props }, ref) => {
	const ariaLabel =
		title &&
		sprintf(
			/* translators: %s filter name */
			__('remove filter - %s'),
			title
		);

	const className = classNames('ee-filter-tag', props.className);

	return (
		<span className={className} ref={ref}>
			{title && title}
			{children && children}
			<button aria-label={ariaLabel} className='ee-filter-tag__close-btn' onClick={onRemove}>
				<Close size={'tiny'} />
			</button>
		</span>
	);
});

export default FilterTag;
