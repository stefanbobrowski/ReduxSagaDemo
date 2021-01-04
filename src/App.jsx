import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import appConfigRequest from './redux/appConfig/appConfig.actions';
import Header from './components/Header/Header';
import HomePage from './pages/Home/Home';
import DemoPage from './pages/Demo/Demo';
import Loading from './components/Loading/Loading';
import './App.scss';

function App() {
	const dispatch = useDispatch();

	const appConfigState = useSelector((state) => state.appConfig.appConfigState);

	const [appConfig, setAppConfig] = useState(appConfigState);

	useEffect(() => {
		dispatch(appConfigRequest());
	}, [dispatch]);

	useEffect(() => {
		setAppConfig(appConfigState);
	}, [appConfigState]);

	if (appConfig) {
		document.body.style.background = appConfig.bgColor;
		return (
			<div className='App' style={{ backgroundColor: appConfig.pageBgColor }}>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/demo' component={DemoPage} />
				</Switch>
			</div>
		);
	}
	return (
		<div className='App-Page'>
			<Loading />
		</div>
	);
}
export default App;
