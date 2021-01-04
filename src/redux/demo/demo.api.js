import { DEMO_URL } from '../../consts';

import api from '../api';

export const getDemo = () => {
	return api({ url: DEMO_URL, timeout: 3000 });
};
