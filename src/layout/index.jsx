import { Link, Outlet, useLocation } from 'react-router-dom';

import Navigation from './navigation';
import useMarketStore from '../store/marketStore';
import { rupiah } from '../utils/toRupiah';
import Modal from '../components/Modal';
import Container from '../components/Container';
import Notification from '../components/Notification';

const index = () => {
	const { getTotalPrice, checkoutCart, modal, notificationNum } =
		useMarketStore();
	const path = useLocation().pathname;

	return (
		<>
			<Modal orderHistory={modal} />
			{modal.length !== 0 && (
				<div
					className={`${'opacity-60 bg-black'} fixed h-screen w-screen font-display`}
				></div>
			)}

			{notificationNum.map((x, index) => {
				return <Notification key={index} />;
			})}

			<div>
				{['/', '/order-history', '/cart'].includes(path) ? (
					<Navigation />
				) : null}
				<Outlet />
			</div>
		</>
	);
};

export default index;
