type Type = 'recurrence' | 'exclusion';

export interface PatternEditorControlsProps {
	label: string;
	onChange: (string) => void;
}

export interface PatternEditorProps {
	id: string;
	onChange: (string) => void;
	rruleString: string;
	type: Type;
}

export interface RRulePatternEditorProps {
	id: string;
	initialOpen: boolean;
	onChange: (string) => void;
	rruleString: string;
	type: Type;
}
