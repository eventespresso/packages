import { useMemo } from 'react';
import classNames from 'classnames';
import { Container } from '../Container';
import { FormBuilderSidebar } from './FormBuilderSidebar';
import { FormElement } from './FormElement';

import type { FormBuilderProps } from './types';
import './styles.scss';

// FormBuilderSidebar
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

	const listItems = formSections.map((formSection) => {
		return formSection.elements.map((element, index) => <FormElement key={index} element={element} />);
	});

	return (
		<Container
			classes={classes}
			content={listItems}
			header={header}
			sidebarAfter={<FormBuilderSidebar />}
			sidebarBefore={null}
		/>
	);
};

export default FormBuilder;
