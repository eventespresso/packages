import { useMemo } from 'react';
import classNames from 'classnames';

import { Container } from '../Container';
import { FormSection } from './FormSection';
import { withFormState } from './context';

import type { FormBuilderProps } from './types';
import './styles.scss';

const FormBuilder: React.FC<FormBuilderProps> = ({
	bodyClassName,
	containerClassName,
	contentClassName,
	formSections,
	header,
	sidebarClassName,
}) => {
	const bodyClass = classNames('ee-form-builder__wrapper', bodyClassName);
	const contentClass = classNames('ee-form-builder__form', contentClassName);
	const containerClass = classNames('ee-form-builder', containerClassName);
	const sidebarClass = classNames(sidebarClassName, 'ee-form-builder__sidebar');
	const classes = useMemo(() => {
		return {
			body: bodyClass,
			container: containerClass,
			content: contentClass,
			sidebarAfter: sidebarClass,
			sidebarBefore: '',
		};
	}, [bodyClass, containerClass, contentClass, sidebarClass]);

	const form = useMemo(() => {
		return formSections.map((formSection) => <FormSection key={formSection.UUID} formSection={formSection} />);
	}, [formSections]);

	return <Container classes={classes} content={form} header={header} />;
};

export default withFormState(FormBuilder);
