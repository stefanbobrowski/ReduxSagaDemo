import DemoTypes from './demo.types';

const INITIAL_STATE = {
	error: null,
};

const demoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case DemoTypes.DEMO_SUCCESS:
			return {
				...state,
				demoState: action.payload,
				error: null,
			};
		case DemoTypes.DEMO_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default demoReducer;
