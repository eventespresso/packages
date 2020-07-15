type PatternType = 'recurrence' | 'exclusion';

interface CommonProps {
	id: string;
	onChange: (rRuleString: string) => void;
	rRuleString: string;
	type: PatternType;
}

export interface EditorControlsProps {
	onReset?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	resetLabel?: string;
}

export interface PatternEditorProps extends CommonProps {}

export interface RRuleEditorProps extends CommonProps, EditorControlsProps {}
