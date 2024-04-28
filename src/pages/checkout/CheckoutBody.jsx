import useMarketStore from '../../store/marketStore';
import { rupiah } from '../../utils/toRupiah';
import Flex from './Flex';

const CheckoutBody = () => {
	const { getCheckoutPrice, getCheckoutTotalItem } = useMarketStore();

	let totalPrice = getCheckoutPrice();
	let servicePrice = (getCheckoutPrice() * 6) / 100;
	let totalPriceAfterService = getCheckoutPrice() + servicePrice;

	return (
		<>
			<div className='mb-[15px]'>
				<p className='font-bold'>
					{getCheckoutTotalItem() > 0
						? `${getCheckoutTotalItem()} items`
						: '1 item'}
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
				<Flex className='mt-[20px]'>
					<p className='font-bold'>Total Tagihan : </p>
					<p className='font-bold'>{rupiah(totalPriceAfterService)}</p>
				</Flex>
			</div>
		</>
	);
};

export default CheckoutBody;
