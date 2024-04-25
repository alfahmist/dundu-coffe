import useMarketStore from '../../store/marketStore';
import Card from './card';

const index = () => {
	const { products } = useMarketStore();

	return (
		<>
			<div>
				<div>Dundu's Coffe</div>
				<hr />
				<input type='checkbox' name='all' id='all' />
				<label htmlFor='all'>Pilih Semua</label>
				<br />
				<div className='flex flex-col items-start'>
					<input type='checkbox' name='all' id='all' />
					{products.map((product, index) => {
						return <Card key={index} product={product} />;
					})}
				</div>
			</div>
		</>
	);
};

export default index;
