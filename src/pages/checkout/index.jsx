import { Link } from 'react-router-dom';
import useMarketStore from '../../store/marketStore';
import Card from './card';
import { rupiah } from '../../utils/toRupiah';
import Container from '../../components/Container';
import CheckoutHeader from './CheckoutHeader';
import CheckoutBody from './CheckoutBody';
const index = () => {
	const { checkout, order } = useMarketStore();

	return (
		<>
			<Container>
				<div>
					<CheckoutHeader />
					<CheckoutBody />

					<hr className='mb-[15px]' />

					{checkout.length > 0 ? (
						<>
							<div className='flex flex-col items-start'>
								{checkout.map((product, index) => {
									return <Card key={index} product={product} />;
								})}
							</div>
						</>
					) : (
						''
					)}
				</div>
				<Link
					onClick={() => {
						order();
					}}
					to={'/payment'}
					className='cursor-pointer mb-[10px] flex justify-center px-[40px]  mx-auto bg-red-500 active:bg-red-600  w-11/12 max-w-[350px]   rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md'
				>
					<span>Order</span>
				</Link>
			</Container>
		</>
	);
};

export default index;
