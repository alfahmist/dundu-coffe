import { Outlet, useLocation } from 'react-router-dom';

import Navigation from './Navigation';
import useMarketStore from '../store/marketStore';
import Modal from '../components/Modal';
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
