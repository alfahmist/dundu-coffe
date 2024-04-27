import { Link } from 'react-router-dom';

import useMarketStore from '../../store/marketStore';
import Card from './card';
import CardColumn from '../../components/CardColumn';

const CartBody = () => {
	const {
		carts,
		setSelectedAll,
		deleteSelectedProduct,
		getSelectedItem,
		isSelectAll,
	} = useMarketStore();

	const btnDeleteSelected = () => {
		getSelectedItem().length > 0 && confirm('delete yang dipilih ?')
			? deleteSelectedProduct()
			: console.log('belum ada product yang dipilih');
	};

	return (
		<>
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
						<button onClick={btnDeleteSelected} className='text-red-500'>
							Delete
						</button>
					</div>
					<hr className='mb-[40px]' />
					{carts.map((product, index) => {
						return <Card key={index} product={product} />;
					})}
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
		</>
	);
};

export default CartBody;
