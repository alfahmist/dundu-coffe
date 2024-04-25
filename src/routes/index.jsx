import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home';
import Cart from '../pages/cart';
import Layout from '../layout';
import OrderHistory from '../pages/history';
import Checkout from '../pages/checkout';
import Payment from '../pages/payment';

const index = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/cart',
					element: <Cart />,
				},
				{
					path: '/order-history',
					element: <OrderHistory />,
				},
				{
					path: '/checkout',
					element: <Checkout />,
				},
				{
					path: '/payment',
					element: <Payment />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default index;
