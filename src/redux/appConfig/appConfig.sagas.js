import { all, call, takeLatest, put } from 'redux-saga/effects';
import AppConfigTypes from './appConfig.types';
import { getAppConfig } from './appConfig.api';

export function* appConfigSagas() {
	yield takeLatest(AppConfigTypes.APP_CONFIG_REQUEST, getAppConfigSaga);
}

export function* getAppConfigSaga() {
	try {
		const response = yield call(getAppConfig);
		const appConfig = response.data;
		yield put({ type: 'APP_CONFIG_SUCCESS', payload: appConfig });
	} catch (error) {
		yield put({ type: 'APP_CONFIG_FAILURE', error: error });
	}
}

// export function* appC) {
// 	yield all([call(getAppConfigSaga)]);
// }
