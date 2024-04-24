import useMarketStore from '../../store/marketStore';
import Card from './card';

const index = () => {
	const { products } = useMarketStore();
	console.log(products);
	return (
		<>
			<div className='flex flex-row flex-wrap justify-between'>
				{products.map((product, index) => {
					return <Card key={index} product={product} />;
				})}
			</div>
		</>
	);
};

export default index;
