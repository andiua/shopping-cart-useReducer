import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Raiting from './Raiting';


const Filter = () => {
	const [rate, setRate] = useState(4);
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
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="Descending"
					name={'group1'}
					type="radio"
					id={'inline-2'}
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="Include Out of Stock"
					type="checkbox"
					id={'inline-3'}
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="Fast Delivery Only"
					type="checkbox"
					id={'inline-4'}
				/>
			</span>
			<span>
				<label style={{ paddingRight: 10 }}>Rating: </label>
				<Raiting
					rating={rate}
					onClick={(i) => setRate(i + 1)}
					style={{ cursor: 'pointer' }}
				/>
			</span>
			<Button variant="light">Clear Filters</Button>
		</div>
	);
};

export default Filter;
