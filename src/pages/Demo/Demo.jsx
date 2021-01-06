import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import demoRequest from '../../redux/demo/demo.actions';
import './Demo.scss';

export const Demo = () => {
	const dispatch = useDispatch();

	const demoConfig = useSelector((state) => state.appConfig.demoConfig);
	const demoAsyncState = useSelector((state) => state.demo.demoState);

	const [demoPage, setDemoPage] = useState(demoConfig);
	const [demoAsync, setDemoAsync] = useState(demoAsyncState);

	useEffect(() => {
		if (!demoAsync) {
			dispatch(demoRequest());
		}
	}, [dispatch]);

	useEffect(() => {
		setDemoPage(demoConfig);
	}, [demoConfig]);

	useEffect(() => {
		setDemoAsync(demoAsyncState);
	}, [demoAsyncState]);

	return (
		<div className='App-Page'>
			<h2>{demoPage.title}</h2>
			<div dangerouslySetInnerHTML={{ __html: demoPage.text }} />
			<br></br>
			<div>
				<h4>Async Request</h4>
				{demoAsync ? (
					<table>
						<tbody>
							<tr>
								<th>ID</th>
								<th>Email</th>
								<th>Username</th>
								<th>Name</th>
								<th>Phone</th>
							</tr>
							{demoAsync.map((demo, i) => (
								<tr key={demo.id}>
									<td>{demo.id}</td>
									<td>{demo.email}</td>
									<td>{demo.username}</td>
									<td>{demo.name}</td>
									<td>{demo.phone}</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<p>Loading... Computer Hotkeys</p>
				)}
			</div>
		</div>
	);
};

export default Demo;
