import useMarketStore from '../../store/marketStore';
import ProductItem from './ProductItem';
import { rupiah } from '../../utils/toRupiah';

const HistoryItem = ({ orderHistory, index }) => {
	console.log(orderHistory);
	const { sendToModal } = useMarketStore();

	let totalPrice = orderHistory.totalPrice;
	let servicePrice = (totalPrice * 6) / 100;
	let totalPriceAfterService = totalPrice + servicePrice;

	let newDate = orderHistory.date.toLocaleDateString('id', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<>
			<div className='border-2 mb-[20px] px-[15px] pb-[20px] pt-[10px] rounded-lg'>
				<div className={'flex justify-between mb-[10px]'}>
					<p>
						{newDate} | <span className='font-light'> order ke - {index}</span>
					</p>
				</div>

				<div className='flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 '>
					<div className='flex flex-col items-start flex-1'>
						{orderHistory.order.map((product, index) => {
							if (index === 0)
								return (
									<ProductItem
										key={index}
										product={product}
										otherProduct={orderHistory.order.length}
										orderHistory={orderHistory}
									/>
								);
						})}
					</div>
					<div
						className={'flex flex-col mr-[20px] justify-center items-center'}
					>
						<p>Total Belanja</p>
						<p className='font-medium mb-[10px]'>
							{rupiah(totalPriceAfterService)}
						</p>
						<button
							onClick={() => {
								sendToModal(orderHistory);
							}}
							className='font-medium text-red-500 mt-auto '
						>
							Lihat Detail Transaksi
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HistoryItem;
