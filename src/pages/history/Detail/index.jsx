import { useLoaderData, useParams } from 'react-router-dom';
import Container from '../../../components/Container';
import Detail from './Detail';
import { rupiah } from '../../../utils/toRupiah';
import useMarketStore from '../../../store/marketStore';

const index = () => {
	let { itemId } = useParams();
	const { getOrderHistoryById } = useMarketStore();
	// const loaderData = useLoaderData();
	// console.log('loaderData');
	// console.log(loaderData);
	// console.log(itemId);
	let orderHistory = getOrderHistoryById(Number(itemId));
	console.log('DETAIL');
	console.log(orderHistory);

	let newDate = orderHistory.date.toLocaleDateString('default', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	let arrDate = newDate.split(',');
	let day = arrDate[0];
	let month = arrDate[1];
	let year = arrDate[2];
	let newTime = orderHistory.date.toLocaleTimeString('en-US');
	console.log(orderHistory);
	return (
		<>
			<Container>
				<div className='flex justify-between py-[10px] px-[15px]'>
					<h1>Detail Transaksi</h1>
				</div>
				<hr />
				<div className='py-[10px] px-[20px]'>
					<div className='flex flex-col sm:justify-between gap-20 pr-[20px] '>
						<div className='flex flex-col items-start flex-1 gap-5'>
							{orderHistory.order.map((product, index) => {
								return <Detail key={index} product={product} />;
							})}
						</div>
						<div className='mb-[200px] flex-1'>
							<p className='font-bold'>
								{orderHistory.totalItem > 0
									? `${orderHistory.totalItem} items`
									: `${orderHistory.totalItem} item`}
							</p>
							<div className='flex justify-between'>
								<p className='font-light'>Total Harga Produk</p>
								<p className='min-w-[120px]'>
									{rupiah(orderHistory.totalPrice)}
								</p>
							</div>
							<div className='flex justify-between'>
								<p className='font-light'>Subtotal</p>
								<p className='min-w-[120px]'>
									{rupiah(orderHistory.totalPrice)}
								</p>
							</div>
							<div className='flex justify-between '>
								<p className='font-light self-start'>Service (6%)</p>
								<p className='min-w-[120px]'>
									{rupiah(orderHistory.servicePrice)}
								</p>
							</div>
							<div className='flex justify-between'>
								<p className='font-medium'>Total Harga</p>
								<p className='font-medium min-w-[120px]'>
									{rupiah(orderHistory.totalPriceAfterService)}
								</p>
							</div>
							<div className={'flex justify-between mt-[20px]'}>
								<p className='font-medium'>Tunai</p>
								<p className='min-w-[120px]'>{rupiah(orderHistory.tunai)}</p>
							</div>
							<div className='flex justify-between'>
								<p className='font-medium'>Kembalian</p>
								<p className='min-w-[120px]'>
									{rupiah(orderHistory.kembalian)}
								</p>
							</div>
							<div className='flex justify-between mt-[20px]'>
								<p className='font-medium'>Tanggal Pembelian</p>
								<p className='min-w-[120px]'>
									{day}, <br />
									{month} {year}
								</p>
							</div>
							<div className='flex justify-between mt-[5px]'>
								<p className='font-medium'>Waktu Pembelian</p>
								<p className='min-w-[120px]'>{newTime}</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default index;
