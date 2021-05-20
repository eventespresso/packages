import { TextInput, NumberInput, Textarea, Select, Switch } from '@eventespresso/adapters';
import { pick } from 'ramda';
import { useMemo } from 'react';

import { FormElementProps, FormInput } from './types';

const DefaultComponent = () => null;

export const MappedElement: React.FC<FormElementProps> = ({ element }) => {
	let Component: React.ComponentType<any>;

	const propsToPick = useMemo<Array<keyof FormInput>>(() => ['placeholder'], []);

	switch (element.type) {
		case 'text':
		case 'email':
			Component = TextInput;
			propsToPick.push('type');
			break;
		case 'integer':
			propsToPick.push('min', 'max');
			Component = NumberInput;
			break;
		case 'textarea':
			Component = Textarea;
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

	return <Component id={element.UUID} {...inputSpecificProps} />;
};
