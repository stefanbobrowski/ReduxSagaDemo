import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
	return (
		<header className='App-Header'>
			<a href='/' className='banner-container'>
				a
			</a>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/demo'>Demo</Link>
			</nav>
		</header>
	);
};

export default Header;
