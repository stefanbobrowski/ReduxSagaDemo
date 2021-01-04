import { APP_CONFIG_URL } from '../../consts';

import api from '../api';

export const getAppConfig = () => {
	return api({ url: APP_CONFIG_URL, timeout: 3000 });
};
