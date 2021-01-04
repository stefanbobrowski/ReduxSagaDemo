import React from 'react';
import loadingIcon from './loading.svg';
import './Loading.scss';

const Loader = () => (
	<div className='loading-container'>
		<div className='loading-spinner' role='status'>
			<img src={loadingIcon} alt='Loading...'></img>
		</div>
	</div>
);

export default Loader;
