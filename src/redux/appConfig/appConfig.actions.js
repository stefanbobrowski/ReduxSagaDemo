import AppConfigTypes from './appConfig.types';

export const appConfigRequest = () => ({
	type: AppConfigTypes.APP_CONFIG_REQUEST,
});

export default appConfigRequest;
