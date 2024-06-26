import Container from '../../components/Container';
import useMarketStore from '../../store/marketStore';
import Product from './Product';

const index = () => {
	const { products } = useMarketStore();
	console.log('you are in home');
	return (
		<>
			<Container>
				<div className='flex flex-row flex-wrap justify-center gap-4'>
					{products.map((product, index) => {
						return <Product key={index} product={product} />;
					})}
				</div>
			</Container>
		</>
	);
};

export default index;
