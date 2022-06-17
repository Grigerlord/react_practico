import React from 'react';
import '@styles/MyAccount.scss';
import Header from '@components/Header';

const MyAccount = () => {
	return (
		<>
			<Header/>
			<div className="MyAccount">
				<div className="MyAccount-container">
					<h1 className="title">My account</h1>
					<form action="/" className="form">
						<div>
							<label thmlFor="name" className="label">Name</label>
							<p className="value">Griger Ratia</p>
							<label thmlFor="email" className="label">Email</label>
							<p className="value">grigerratia@gmail.com</p>
							<label thmlFor="password" className="label">Password</label>
							<p className="value">*********</p>
						</div>
						<input type="submit" value="Edit" className="secondary-button login-button" />
					</form>
				</div>
			</div>
		</>
	);
}

export default MyAccount;