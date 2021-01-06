import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
	return (
		<header className='App-Header'>
			<Link to='/' className='banner-container'>
				a
			</Link>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/demo'>Demo</Link>
			</nav>
		</header>
	);
};

export default Header;
