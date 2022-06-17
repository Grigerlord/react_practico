import React from 'react';
import OrderItem from '@components/OrderItem';
import Header from '@components/Header';
import '@styles/Orders.scss';

const Orders = () => {
	return (
		<>
			<Header />
			<div className="Orders">
				<div className="Orders-container">
					<h1 className="title">My orders</h1>
					<div className="Orders-content">
						<OrderItem />
					</div>
				</div>
			</div>
		</>
	);
}

export default Orders;