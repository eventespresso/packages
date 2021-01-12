import { useContext } from 'react';
import { StateContext, RTEState } from '../context';

const useEditorState = (): RTEState => {
	return useContext(StateContext);
};

export default useEditorState;
