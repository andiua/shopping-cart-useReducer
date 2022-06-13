import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Raiting = ({ rating, onClick, style }) => {
	return (
		<>
			{[...Array(5)].map((_, i) => (
				<span
					key={i}
					onClick={() => onClick(i)}
					style={style}>
					{rating > i ? <AiFillStar fontSize="15px" /> : <AiOutlineStar fontSize="15px" />}
				</span>
			))}
		</>
	);
};

export default Raiting;
