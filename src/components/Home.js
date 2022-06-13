import React from 'react';
import { CartState } from '../context/Context';
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import './style.scss'

const Home = () => {
	const {
		state: { products },
	} = CartState();
	return (
		<div className="home">
			<Filter />
			<div className="productContainer">
				{products.map((product) => (
					<SingleProduct key={product.id} product={ product} />
				))}
			</div>
		</div>
	);
};

export default Home;
