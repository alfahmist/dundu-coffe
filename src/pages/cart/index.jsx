import useMarketStore from '../../store/marketStore';
import Card from './card';

const index = () => {
	const { products } = useMarketStore();

	return (
		<>
			<div>
				<div className='mb-[15px]'>Dundu's Coffe</div>
				<hr className='mb-[15px]' />
				<div className='mb-[15px]'>
					<input type='checkbox' name='all' id='all' className='mr-[10px]' />
					<label htmlFor='all'>Pilih Semua</label>
				</div>
				<hr className='mb-[40px]' />
				<div className='flex flex-col items-start'>
					{products.map((product, index) => {
						return <Card key={index} product={product} />;
					})}
				</div>
			</div>
		</>
	);
};

export default index;
