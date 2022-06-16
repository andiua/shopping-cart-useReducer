import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Raiting from './Raiting';
import { CartState } from '../context/Context';

const Filter = () => {
	const {
		filterState: { byStock, byFastDelivery, bySort, byRating },
		filterDispatch,
	} = CartState();
	return (
		<div className="filters">
			<span className="title">Filter Products</span>
			<span>
				<Form.Check
					inline
					label="Ascending"
					type="radio"
					name={'group1'}
					id={'inline-1'}
					onChange={() =>
						filterDispatch({
							type: 'SORT_BY_PRICE',
							payload: 'lowToHeight',
						})
					}
					checked={bySort === 'lowToHeight' ? true : false}
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="Descending"
					name={'group1'}
					type="radio"
					id={'inline-2'}
					onChange={() =>
						filterDispatch({
							type: 'SORT_BY_PRICE',
							payload: 'heightToLow',
						})
					}
					checked={bySort === 'heightToLow' ? true : false}
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="Include Out of Stock"
					type="checkbox"
					id={'inline-3'}
					onChange={() =>
						filterDispatch({
							type: 'FILTER_BY_STOCK',
						})
					}
					checked={byStock}
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="Fast Delivery Only"
					type="checkbox"
					id={'inline-4'}
					onChange={() =>
						filterDispatch({
							type: 'FILTER_BY_DELIVERY',
						})
					}
					checked={byFastDelivery}
				/>
			</span>
			<span>
				<label style={{ paddingRight: 10 }}>Rating: </label>
				<Raiting
					rating={byRating}
					onClick={(i) =>
						filterDispatch({
							type: 'FILTER_BY_RAITING',
							payload: i + 1,
						})
					}
					style={{ cursor: 'pointer' }}
				/>
			</span>
			<Button
				variant="light"
				onClick={() =>
					filterDispatch({
						type: 'CLEAR_FILTERS',
					})
				}>
				Clear Filters
			</Button>
		</div>
	);
};

export default Filter;
