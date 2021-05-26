import { pick } from 'ramda';
import { useMemo } from 'react';

import type { AnyObject } from '@eventespresso/utils';
import { TextInput, NumberInput, Textarea, Select, Switch, withLabel } from '../../';
import { FormElementProps, FormElement } from '../types';

const DefaultComponent = () => null;

export const MappedElement: React.FC<FormElementProps> = ({ element }) => {
	let Component: React.ComponentType<AnyObject>;

	const propsToPick = useMemo<Array<keyof FormElement>>(() => ['placeholder'], []);

	switch (element.type) {
		case 'text':
		case 'email':
			Component = withLabel(TextInput);
			propsToPick.push('type');
			break;
		case 'integer':
			propsToPick.push('min', 'max');
			Component = withLabel(NumberInput);
			break;
		case 'textarea':
			Component = withLabel(Textarea);
			break;
		case 'select':
			Component = Select;
			propsToPick.push('options');
			break;
		case 'switch':
			Component = Switch;
			break;
		default:
			Component = DefaultComponent;
			break;
	}

	const inputSpecificProps = useMemo(() => pick(propsToPick, element), [element, propsToPick]);

	return <Component id={element.UUID} {...inputSpecificProps} label={element.publicLabel} />;
};
