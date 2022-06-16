import { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, filterReducer } from './Reducers';

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
	const products = [...Array(20)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(50, 499),
		image: faker.image.food(640, 480, true),
		inStock: faker.datatype.number({ min: 0, max: 9 }),
		fastDelivery: faker.datatype.boolean(),
		ratings: faker.datatype.number({ min: 1, max: 5 }),
	}));

	const [state, dispatch] = useReducer(cartReducer, {
		products: products,
		cart: [],
	});

	const [filterState, filterDispatch] = useReducer(filterReducer, {
		byStock: false,
		byFastDelivery: false,
		byRating: 0,
		bySearchQuery: '',
	});

	console.log(filterState);

	return (
		<Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>
			{children}
		</Cart.Provider>
	);
};

export default Context;

export const CartState = () => {
	return useContext(Cart);
};
