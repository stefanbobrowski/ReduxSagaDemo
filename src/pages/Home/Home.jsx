import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
	const homeConfig = useSelector((state) => state.appConfig.homeConfig);
	const [homePage, setHomePage] = useState(homeConfig);

	useEffect(() => {
		setHomePage(homeConfig);
	}, [homeConfig]);

	return (
		<div className='App-Page'>
			<h2>{homePage.title}</h2>
			<p dangerouslySetInnerHTML={{ __html: homePage.text }} />

			<div>
				{homePage.sections.map((section, i) => (
					<div className={section.type} key={i}>
						<h4>{section.title}</h4>
						<p>{section.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
