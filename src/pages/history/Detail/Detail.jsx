import { rupiah } from '../../../utils/toRupiah';

const Detail = ({ product }) => {
	return (
		<>
			<div
				className={`flex flex-col sm:flex-row w-full border px-[20px] py-[15px] rounded-xl items-center`}
			>
				<img
					src={'/src/assets/images/' + product.image}
					alt={product.name}
					className='w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] rounded-2xl mb-[10px]'
				/>
				<div className='flex flex-col sm:ml-4 w-full mb-2 items-center sm:items-start '>
					<p className='font-medium'>{product.name}</p>
					<div className='flex gap-1 justify-center items-center'>
						<p className='font-light text-sm'>{product.quantity} x</p>
						<p className='font-light text-sm'>{rupiah(product.price)}</p>
					</div>
				</div>
				<div className='flex flex-col sm:gap-2 w-full sm:w-[150px] justify-center items-center'>
					<p className='font-normal'>Total Harga</p>
					<p className='font-medium '>{rupiah(product.price)}</p>
				</div>
			</div>
		</>
	);
};

export default Detail;
