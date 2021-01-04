import { all, call, takeLatest, put } from 'redux-saga/effects';
import DemoTypes from './demo.types';
import { getDemo } from './demo.api';

export function* demoSagas() {
	yield takeLatest(DemoTypes.DEMO_REQUEST, getDemoSaga);
}

export function* getDemoSaga() {
	try {
		const response = yield call(getDemo);
		const demo = response.data;
		yield put({ type: 'DEMO_SUCCESS', payload: demo });
	} catch (error) {
		yield put({ type: 'DEMO_FAILURE', error: error });
	}
}

// export function* appC) {
// 	yield all([call(getdemoSaga)]);
// }
