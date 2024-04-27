import Container from '../../components/Container';
import useMarketStore from '../../store/marketStore';
import Card from './Card';

const index = () => {
	const { products } = useMarketStore();
	return (
		<>
			<Container>
				<div className='flex flex-row flex-wrap justify-center gap-4'>
					{products.map((product, index) => {
						return <Card column key={index} product={product} />;
					})}
				</div>
			</Container>
		</>
	);
};

export default index;
