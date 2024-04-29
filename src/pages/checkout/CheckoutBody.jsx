import useMarketStore from '../../store/marketStore';
import { rupiah } from '../../utils/toRupiah';
import CheckoutItem from './CheckoutItem';

const CheckoutBody = () => {
	const { getCheckoutPrice, getCheckoutTotalItem, checkout } = useMarketStore();

	let totalPrice = getCheckoutPrice();
	let servicePrice = (getCheckoutPrice() * 6) / 100;
	let totalPriceAfterService = getCheckoutPrice() + servicePrice;

	return (
		<>
			<div className='flex justify-between mt-[20px]'>
				<p className='font-medium'>Rincian Belanja</p>
			</div>
			<hr className='my-[20px]' />
			{checkout.length > 0 ? (
				<>
					<div className='flex flex-col items-start'>
						{checkout.map((product, index) => {
							return <CheckoutItem key={index} product={product} />;
						})}
					</div>
				</>
			) : (
				''
			)}
			<div className='mb-[15px]'>
				<p className='font-bold'>
					{getCheckoutTotalItem() > 0
						? `${getCheckoutTotalItem()} items`
						: '1 item'}
				</p>
				<div className='flex justify-between'>
					<p className='font-light'>Total Harga Produk</p>
					<p>{rupiah(totalPrice)}</p>
				</div>
				<div className='flex justify-between'>
					<p className='font-light'>Subtotal</p>
					<p>{rupiah(totalPrice)}</p>
				</div>
				<div className='flex justify-between'>
					<p className='font-light'>Service (6%)</p>
					<p>{rupiah(servicePrice)}</p>
				</div>
				<div className='flex justify-between mt-[20px]'>
					<p className='font-bold'>Total Tagihan : </p>
					<p className='font-bold'>{rupiah(totalPriceAfterService)}</p>
				</div>
			</div>
		</>
	);
};

export default CheckoutBody;
