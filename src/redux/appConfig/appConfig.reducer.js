import AppConfigTypes from './appConfig.types';

const INITIAL_STATE = {
	error: null,
};

const configReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AppConfigTypes.APP_CONFIG_SUCCESS:
			{
				const pages = action.payload.pages;

				pages.forEach((page) => {
					const title = page.title.charAt(0).toLowerCase() + page.title.slice(1);
					const configVar = `${title}Config`;
					state[`${configVar}`] = page;
				});
			}
			return {
				...state,
				appConfigState: action.payload,
				error: null,
			};
		case AppConfigTypes.APP_CONFIG_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default configReducer;
