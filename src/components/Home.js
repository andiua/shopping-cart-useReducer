import React from 'react';
import { CartState } from '../context/Context';
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import './style.scss';

const Home = () => {
	const {
		state: { products },
		filterState: { byStock, byFastDelivery, byRating, bySearchQuery, bySort },
	} = CartState();

	const transformProducts = () => {
		let sortedProducts = products;

		if (bySort) {
			sortedProducts = sortedProducts.sort((a, b) =>
				bySort === 'lowToHeight' ? a.price - b.price : b.price - a.price
			);
		}

		if (!byStock) {
			sortedProducts = sortedProducts.filter((prod) => prod.inStock);
		}

		if (byFastDelivery) {
			sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
		}

		if (byRating) {
			sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
		}

		if (bySearchQuery) {
			sortedProducts = sortedProducts.filter((prod) =>
				prod.name.toLowerCase().includes(bySearchQuery.toLowerCase())
			);
		}

		return sortedProducts;
	};

	return (
		<div className="home">
			<Filter />
			<div className="productContainer">
				{transformProducts().map((product) => (
					<SingleProduct
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
