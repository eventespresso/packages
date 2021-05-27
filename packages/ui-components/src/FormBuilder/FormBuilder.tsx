import { useMemo } from 'react';
import classNames from 'classnames';

import { Container } from '../Container';
import { FormSection } from './FormSection';
import { withFormState } from './context';
import { useFormState } from './state';

import type { FormBuilderProps } from './types';
import './styles.scss';

const FormBuilder: React.FC<FormBuilderProps> = ({ bodyClassName, containerClassName, contentClassName, header }) => {
	const { getSections } = useFormState();

	const bodyClass = classNames('ee-form-builder__wrapper', bodyClassName);
	const contentClass = classNames('ee-form-builder__form', contentClassName);
	const containerClass = classNames('ee-form-builder', containerClassName);

	const classes = useMemo(() => {
		return {
			body: bodyClass,
			container: containerClass,
			content: contentClass,
		};
	}, [bodyClass, containerClass, contentClass]);

	return (
		<Container classes={classes} header={header}>
			{getSections().map((formSection) => (
				<FormSection key={formSection.UUID} formSection={formSection} />
			))}
		</Container>
	);
};

export default withFormState(FormBuilder);
