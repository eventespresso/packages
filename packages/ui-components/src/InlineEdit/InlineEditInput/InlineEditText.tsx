import { useCallback } from 'react';

import { InlineEdit } from '@eventespresso/adapters';
import Preview from './Preview';
import type { InlineEditProps } from './types';

import './style.scss';

export const InlineEditText: React.FC<InlineEditProps> = ({
	className,
	'data-testid': dataTestId,
	lineCount,
	tag: as,
	...props
}) => {
	const preview = useCallback(
		(previewProps) => <Preview {...previewProps} data-testid={dataTestId} lineCount={lineCount} />,
		[dataTestId, lineCount]
	);

	return (
		<InlineEdit
			placeholder=''
			{...props}
			as={as}
			data-testid={`${dataTestId}-input`}
			inputClassName='ee-inline-edit__text'
			inputType='text'
			Preview={preview}
			previewClassName={className}
		/>
	);
};
