import { forwardRef } from 'react';
import classNames from 'classnames';

import { Select as SelectAdapter } from '@eventespresso/adapters';
import { ArrowDownAlt } from '@eventespresso/icons';
import { withLabel } from '../withLabel';
import InlineSelect from './InlineSelect';
import type { SelectProps } from './types';

import './style.scss';

const rootProps = { className: 'ee-select-wrapper', width: 'max-content' };

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ flow, id, ...props }, ref) => {
	const className = classNames('ee-select', props.className);

	if (flow === 'inline') {
		return (
			<InlineSelect
				debounceDelay={2500}
				{...props}
				className={className}
				id={id}
				ref={ref}
				rootProps={rootProps}
			/>
		);
	}

	return (
		<SelectAdapter
			{...props}
			className={className}
			icon={<ArrowDownAlt />}
			id={id}
			ref={ref}
			rootProps={rootProps}
		/>
	);
});

export default withLabel(Select);
