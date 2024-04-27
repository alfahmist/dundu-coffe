import CardContent from './CardContent';
import CardImage from './CardImage';

const Card = ({ product, column }) => {
	return (
		<>
			<div
				className={`flex ${
					column ? 'flex-col' : ''
				} border-2 w-[45%] rounded-2xl overflow-hidden mb-4  sm:w-[31%]`}
			>
				<CardImage src={product.image} alt={product.name} />
				<CardContent product={product} />
			</div>
		</>
	);
};

export default Card;
