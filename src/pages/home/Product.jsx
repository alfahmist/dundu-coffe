import CardContent from './ProductContent';
import CardImage from './ProductImage';

const Product = ({ product }) => {
	return (
		<>
			<div
				className={`flex flex-col border-2 w-[45%] rounded-2xl overflow-hidden mb-4 sm:w-[31%]`}
			>
				<CardImage src={product.image} alt={product.name} />
				<CardContent product={product} />
			</div>
		</>
	);
};

export default Product;
