export interface FormInput {
	UUID: string;
	relation: string;
	adminLabel: string;
	adminOnly: boolean;
	belongsTo: string;
	helpClass: string;
	helpText: string;
	htmlClass: string;
	max: number;
	min: number;
	order: number;
	placeholder: string;
	publicLabel: string;
	required: boolean;
	requiredText: string;
	status: string;
	type: string;
	wpUser: number;
}

export interface FormSection {
	UUID: string;
	adminLabel: string;
	appliesTo: string;
	belongsTo: string;
	elements: Array<FormInput>;
	htmlClass: string;
	order: number;
	relation: string;
	status: string;
	wpUser: number;
}

export interface FormBuilderProps {
	bodyClassName?: string;
	containerClassName?: string;
	contentClassName?: string;
	header?: React.ReactNode;
	formSections: Array<FormSection>;
	sidebarClassName?: string;
}

export interface FormElementProps {
	element: FormInput;
}

export interface FormSectionProps {
	formSection: FormSection;
}

export interface SettingsProps {
	element: FormInput;
	open: boolean;
}
