import { combineReducers } from 'redux';
import appConfigReducer from './appConfig/appConfig.reducer';
import demoReducer from './demo/demo.reducer';

const rootReducer = combineReducers({
	appConfig: appConfigReducer,
	demo: demoReducer,
});

export default rootReducer;
