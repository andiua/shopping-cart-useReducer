import React from 'react';
import { Nav, Navbar, Container, FormControl, Badge, Dropdown } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

const Header = () => {
	const {
		state: { cart },
		dispatch,
		filterDispatch,
	} = CartState();

	return (
		<Navbar
			bg="dark"
			variant="dark"
			style={{ height: 80 }}>
			<Container>
				<Navbar.Brand>
					<Link to="/">Shopping Cart</Link>
				</Navbar.Brand>
				<Navbar.Text className="search">
					<FormControl
						style={{ width: 500 }}
						placeholder="Search a product"
						className="m-auto"
						onChange={(e) => {
							filterDispatch({
								type: 'FILTER_BY_SEARCH',
								payload: e.target.value,
							});
						}}
					/>
				</Navbar.Text>
				<Nav>
					<Dropdown>
						<Dropdown.Toggle variant="success">
							<FaShoppingCart
								color="white"
								fontSize="25px"
							/>
							<Badge className="cart__badge">{cart.length}</Badge>
						</Dropdown.Toggle>
						<Dropdown.Menu
							align="end"
							style={{ minWidth: 370 }}>
							{cart.length > 0 ? (
								<>
									{cart.map((item) => (
										<div
											className="cartitem"
											key={item.id}>
											<img
												src={item.image}
												alt={item.name}
												className="cartItemImg"
											/>
											<div className="cartItemDetail">
												<span>{item.name}</span>
												<div>
													<span>{item.qty} * </span>
													<span>{item.price.split('.')[0]} ₴</span>
												</div>
											</div>
											<AiFillDelete
												fontSize="20px"
												style={{ cursor: 'pointer' }}
												onClick={() =>
													dispatch({
														type: 'REMOVE_FROM_CART',
														payload: item,
													})
												}
											/>
										</div>
									))}
									<Link to="/cart">
										<Button style={{ width: '95%', margin: '0 10px' }}>Go to Cart</Button>
									</Link>
								</>
							) : (
								<span style={{ padding: 10 }}>Cart is Empty!</span>
							)}
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
