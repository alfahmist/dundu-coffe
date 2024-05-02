import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/home';
import Cart from '../pages/cart';
import Layout from '../layout';
import OrderHistory from '../pages/history';
import Checkout from '../pages/checkout';
import Detail from '../pages/history/Detail';
import useMarketStore from '../store/marketStore';

const index = () => {
	const { getOrderHistoryById } = useMarketStore();

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			errorElement: (
				<>
					<div>404 Page not found</div>
				</>
			),
			children: [
				{
					path: '',
					element: <Home />,
				},
				{
					path: 'cart',
					element: <Cart />,
				},
				{
					path: 'checkout',
					element: <Checkout />,
				},
				{
					path: 'order-history',
					element: <OrderHistory />,
				},
				{
					path: 'order-history/:itemId',
					element: <Detail />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default index;
