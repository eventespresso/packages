type Type = 'recurrence' | 'exclusion';

export interface PatternEditorControlsProps {
	label: string;
	onChange: (string) => string;
}

export interface PatternEditorProps {
	id: string;
	onChange: (string) => string;
	rruleString: string;
	type: Type;
}

export interface RRulePatternEditorProps {
	id: string;
	initialOpen: boolean;
	onChange: (string) => string;
	rruleString: string;
	type: Type;
}
