import ProductHeader from './ProductHeader';
import ProductBody from './ProductBody';

const Product = ({ product }) => {
	return (
		<>
			<div
				className={`flex flex-col border-2 w-[45%] rounded-2xl overflow-hidden mb-4 sm:w-[31%]`}
			>
				<ProductHeader src={product.image} alt={product.name} />
				<ProductBody product={product} />
			</div>
		</>
	);
};

export default Product;
