import { all, call } from 'redux-saga/effects';
import { appConfigSagas } from './appConfig/appConfig.sagas';
import { demoSagas } from './demo/demo.sagas';

export default function* rootSaga() {
	yield all([call(appConfigSagas), call(demoSagas)]);
}
