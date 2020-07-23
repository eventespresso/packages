import type { RRuleStateReducer } from './types';

const reducer: RRuleStateReducer = (state, action) => {
	const { type } = action;
	switch (type) {
		default:
			throw new Error();
	}
};

export default reducer;
