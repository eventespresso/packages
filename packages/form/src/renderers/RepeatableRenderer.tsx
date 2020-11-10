import React from 'react';
import { __, sprintf } from '@eventespresso/i18n';

import { Button } from '../../../components/src';
import { CloseOutlined } from '@eventespresso/icons';
import type { RepeatableRendererProps } from '../types';
import { Field, Group } from '../fields';

const RepeatableRenderer: React.FC<Omit<RepeatableRendererProps, 'component'>> = ({
	fields,
	fieldType,
	label,
	...rest
}) => {
	const Component = fieldType === 'group' ? Group : Field;

	// TODO: use immutable data structures here
	// const onAdd = useCallback(() => fields.push(undefined), [fields]);
	// const onRemove = useCallback((index: number) => () => () => fields.remove(index), [fields]);

	return (
		<>
			<div>
				<h4>{label}</h4>
			</div>
			{fields.map((fieldName: string, index: number) => {
				return (
					<div key={fieldName + index} className='repeatable-item'>
						<Component
							{...rest}
							fieldType={fieldType}
							name={fieldName}
							label={
								<>
									{sprintf(
										/* translators: %d the entry number */
										__('Entry %d'),
										`${index + 1}`
									)}
									<Button
										className='remove-item'
										size='big'
										icon={CloseOutlined}
										// onClick={onRemove(index)}
									/>
								</>
							}
						></Component>
					</div>
				);
			})}
			<Button
				className='add-item'
				// onClick={onAdd}
			>
				{__('Add')}
			</Button>
		</>
	);
};

export default RepeatableRenderer;
