import Card from './card';
import useMarketStore from '../store/marketStore';
import { rupiah } from '../utils/toRupiah';
import Flex from './flex';

const Modal = ({ orderHistory }) => {
	const { closeModal } = useMarketStore();
	if (orderHistory.length !== 0) {
		let totalPrice = orderHistory.totalPrice;
		let servicePrice = (orderHistory.totalPrice * 6) / 100;
		let totalPriceAfterService = orderHistory.totalPrice + servicePrice;

		let newDate = orderHistory.date.toLocaleDateString('default', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		let newTime = orderHistory.date.toLocaleTimeString('en-US');

		console.log(orderHistory);
		return (
			<div className='fixed border overflow-hidden w-[800px] h-[400px] mx-auto left-0 right-0 top-0 bottom-0 my-auto rounded-xl bg-white z-10'>
				<div className='flex justify-between py-[10px] px-[15px]'>
					<h1>Detail Transaksi</h1>
					<button
						onClick={() => {
							closeModal();
						}}
					>
						X
					</button>
				</div>
				<hr />
				<div className='py-[10px] px-[20px] h-[500px] '>
					<div className='flex flex-row justify-between gap-20 h-[300px] pr-[20px] overflow-y-scroll  '>
						<div className='flex flex-col items-start flex-1 gap-5'>
							{orderHistory.order.map((product, index) => {
								return <Card key={index} product={product} />;
							})}
						</div>
						<div className='mb-[15px] flex-1'>
							<p className='font-bold'>
								{orderHistory.totalItem > 0
									? `${orderHistory.totalItem} items`
									: `${orderHistory.totalItem} item`}
							</p>
							<Flex>
								<p className='font-light'>Total Harga Produk</p>
								<p>{rupiah(totalPrice)}</p>
							</Flex>
							<Flex>
								<p className='font-light'>Subtotal</p>
								<p>{rupiah(totalPrice)}</p>
							</Flex>
							<Flex>
								<p className='font-light'>Service (6%)</p>
								<p>{rupiah(servicePrice)}</p>
							</Flex>
							<Flex>
								<p className='font-medium'>Total</p>
								<p>{rupiah(totalPriceAfterService)}</p>
							</Flex>
							<Flex className={'mt-[20px]'}>
								<p className='font-medium'>Tunai</p>
								<p>{rupiah(orderHistory.tunai)}</p>
							</Flex>
							<Flex>
								<p className='font-medium'>Kembalian</p>
								<p>{rupiah(orderHistory.kembalian)}</p>
							</Flex>
							<Flex className='mt-[20px]'>
								<p className='font-medium'>Tanggal Pembelian</p>
								<p>{newDate}</p>
							</Flex>
							<Flex className='mt-[5px]'>
								<p className='font-medium'>Waktu Pembelian</p>
								<p>{newTime}</p>
							</Flex>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
export default Modal;
