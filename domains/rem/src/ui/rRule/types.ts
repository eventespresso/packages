type PatternType = 'recurrence' | 'exclusion';

interface CommonProps {
	id: string;
	onChange: (rRuleString: string) => void;
	rRuleString: string;
	type: PatternType;
}

export interface EditorControlsProps {}

export interface PatternEditorProps extends CommonProps {}

export interface RRuleEditorProps extends CommonProps, EditorControlsProps {}
