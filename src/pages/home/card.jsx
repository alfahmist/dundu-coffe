import CardContent from './CardContent';
import CardImage from './CardImage';

const Card = ({ product }) => {
	return (
		<>
			<div className='flex flex-col border-2 w-[45%] sm:w-[31%] rounded-2xl overflow-hidden mb-4'>
				<CardImage src={product.image} alt={product.name} />
				<CardContent product={product} />
			</div>
		</>
	);
};

export default Card;
