import { useMemo } from 'react';

import classNames from 'classnames';

import { Select as SelectAdapter } from '@eventespresso/adapters';

import type { SelectProps } from './types';
import { withDebounce } from '../withDebounce';

import './style.scss';

const InlineSelect: React.FC<SelectProps> = (props) => {
	const className = classNames('ee-select--inline', props.className);
	const rootClassName = classNames('ee-select-wrapper--inline', props?.rootProps?.className);
	const rootProps = useMemo(() => ({ ...props.rootProps, className: rootClassName }), [
		props.rootProps,
		rootClassName,
	]);

	return <SelectAdapter {...props} className={className} rootProps={rootProps} />;
};

export default withDebounce(InlineSelect);
