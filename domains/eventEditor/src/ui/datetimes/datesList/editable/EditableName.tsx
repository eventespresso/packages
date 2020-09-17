import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import type { DateItemProps } from '../types';
import { useDatetimeMutator } from '@eventespresso/edtr-services';
import { InlineEditText } from '@eventespresso/components';
import { getPropsAreEqual } from '@eventespresso/utils';

interface EditableNameProps extends DateItemProps {
	className?: string;
	view?: 'card' | 'table';
}

const EditableName: React.FC<EditableNameProps> = ({ className, entity: datetime, view = 'card' }) => {
	const { updateEntity } = useDatetimeMutator(datetime.id);

	const tooltip = __('edit title...');

	const dateName = datetime.name || tooltip;

	const lineCount = view === 'card' && 2;

	const onChangeName = useCallback(
		(name: string): void => {
			if (name !== datetime.name) {
				updateEntity({ name });
			}
		},
		[datetime.name, updateEntity]
	);

	return (
		<InlineEditText
			className={className}
			fitText={view === 'card'}
			lineCount={lineCount}
			onChangeValue={onChangeName}
			tag={view === 'table' ? 'p' : 'h4'}
			tooltip={tooltip}
			value={dateName}
		/>
	);
};

export default React.memo(EditableName, getPropsAreEqual(['entity', 'name']));
