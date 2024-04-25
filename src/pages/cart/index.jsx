import { Link } from 'react-router-dom';
import useMarketStore from '../../store/marketStore';
import Card from './card';

const index = () => {
	const {
		carts,
		setSelectedAll,
		deleteSelectedProduct,
		getSelectedItem,
		selectedAll,
		isSelectAll,
	} = useMarketStore();

	return (
		<>
			<div>
				<div className='mb-[15px] flex justify-between'>
					<div className=''>Dundu's Coffe</div>
					<Link to={'/'} className='text-blue-500'>
						+Tambah
					</Link>
				</div>
				<hr className='mb-[15px]' />
				{carts.length > 0 ? (
					<>
						<div className='mb-[15px] flex justify-between'>
							<div className='flex'>
								<input
									onChange={(event) => setSelectedAll(event.target.checked)}
									type='checkbox'
									name='all'
									id='all'
									className='mr-[10px] w-[18px] h-[18px]'
									checked={isSelectAll}
								/>
								<label htmlFor='all' className='leading-[18px]'>
									Pilih Semua
								</label>
							</div>
							<button
								onClick={() => {
									getSelectedItem() > 0 && confirm('delete yang dipilih ?')
										? deleteSelectedProduct()
										: null;
								}}
								className='text-red-500'
							>
								Delete
							</button>
						</div>
						<hr className='mb-[40px]' />
						<div className='flex flex-col items-start'>
							{carts.map((product, index) => {
								return <Card key={index} product={product} />;
							})}
						</div>
					</>
				) : (
					<>
						<Link
							to={'/'}
							className='text-center font-medium text-2xl my-[20px] text-blue-500 block'
						>
							+Tambah barang
						</Link>
					</>
				)}
			</div>
		</>
	);
};

export default index;
