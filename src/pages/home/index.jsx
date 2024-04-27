import useMarketStore from '../../store/marketStore';
import Card from './Card';

const index = () => {
	const { products } = useMarketStore();
	return (
		<>
			<div className='flex flex-row flex-wrap justify-center gap-4'>
				{products.map((product, index) => {
					return <Card key={index} product={product} />;
				})}
			</div>
		</>
	);
};

export default index;
