import { produce } from 'immer';
import { create } from 'zustand';
import { products } from '../data/data';

const useMarketStore = create((set, get) => ({
	products: products,
	carts: [
		// {
		// 	id: 213,
		// 	quantity: 1,
		// 	stock: 5,
		// 	name: 'name 1',
		// 	image: 'affogato.jpg',
		// 	price: 42000,
		// 	isSelected: true,
		// },
		// {
		// 	id: 22,
		// 	quantity: 2,
		// 	stock: 5,
		// 	name: 'name 2',
		// 	image: 'affogato.jpg',
		// 	price: 42000,
		// 	isSelected: true,
		// },
		// {
		// 	id: 11,
		// 	quantity: 1,
		// 	stock: 1,
		// 	name: 'name 3',
		// 	image: 'affogato.jpg',
		// 	price: 42000,
		// 	isSelected: true,
		// },
	],
	checkout: [
		// {
		// 	id: 11,
		// 	quantity: 1,
		// 	stock: 1,
		// 	name: 'name 1',
		// 	image: 'affogato.jpg',
		// 	price: 41000,
		// },
		// {
		// 	id: 13,
		// 	quantity: 2,
		// 	stock: 1,
		// 	name: 'name 2',
		// 	image: 'affogato.jpg',
		// 	price: 2000,
		// },
		// {
		// 	id: 15,
		// 	quantity: 3,
		// 	stock: 1,
		// 	name: 'name 3',
		// 	image: 'affogato.jpg',
		// 	price: 32000,
		// },
	],
	orderHistory: [],
	notification: false,
	notificationText: '',
	isSelectAll: false,
	isLoading: false,
	setIsLoading: (loading) => {
		set({ isLoading: loading });
	},
	Notification: (text) => {
		set(() => ({
			notification: true,
			notificationText: text,
		}));
		setTimeout(() => {
			set(() => ({
				notification: false,
			}));
		}, 2000);
	},
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
	checkoutCart: () => {
		console.log(get().checkout);
		set({
			checkout: get().getSelectedItem(),
		});
		setTimeout(() => {
			set({
				carts: get().getUnSelectedItem(),
			});
		}, 1000);
	},

	addToOrderHistory: () => {
		set((state) => ({
			orderHistory: [
				...get().orderHistory,
				(state.orderHistory = {
					order: get().checkout,
					date: new Date(),
					totalPrice: get().getCheckoutPrice(),
					totalItem: get().getCheckoutTotalItem(),
				}),
			],
		}));

		setTimeout(() => {
			set({
				checkout: [],
			});
		}, 2000);

		console.log(get().orderHistory);
	},
	addToCart: (obj) => {
		get().Notification('1 item added to cart');
		setTimeout(() => {
			console.log(get().carts);
		}, 2000);
		// jika id nya ad
		get().carts.some((x) => x.id === obj.id)
			? // jika id nya ada maka tambah quantity
			  set((state) => ({
					carts: state.carts.map((x) => {
						if (x.id === obj.id) {
							if (x.quantity < obj.stock) {
								x.quantity += 1;
							}
						}
						return x;
					}),
			  }))
			: // jika id nya tidak ada tambahkan objek baru
			  set((state) => ({
					carts: [
						...state.carts,
						{
							id: obj.id,
							quantity: 1,
							stock: obj.stock,
							name: obj.name,
							image: obj.image,
							price: obj.price,
							isSelected: true,
						},
					],
			  }));
	},
	updateQuantity: (id, quantity) => {
		console.log(get().carts);
		set((state) =>
			state.carts.map((x) => {
				if (x.id === id) {
					if (x.quantity >= 1) x.quantity = quantity;
					if (x.quantity === 0) x.quantity = 1;
				}
			})
		);
	},
	deleteProduct: (id) => {
		console.log(get().carts);

		get().Notification('1 item deleted');
		set((state) => ({ carts: state.carts.filter((x) => x.id !== id) }));
	},
	deleteSelectedProduct: () => {
		console.log(get().carts);

		get().Notification(
			`${
				get().getSelectedItem() > 1
					? `${get().getSelectedItem()} items deleted`
					: `${get().getSelectedItem()} item deleted`
			} `
		);
		set((state) => ({
			carts: state.carts.filter((x) => x.isSelected === false),
		}));
		if (get().carts.length <= 0) {
			set((state) => ({ isSelectAll: (state.isSelectAll = false) }));
		}
	},
	setSelected: (id) => {
		console.log(get().carts);
		set((state) =>
			state.carts.map((x) => {
				if (x.id === id) x.isSelected = !x.isSelected;
			})
		);
	},
	setSelectedAll: (checked) => {
		console.log(get().carts);
		set(() => ({ isSelectAll: checked }));
		set((state) => state.carts.map((x) => (x.isSelected = checked)));
	},
	getSelectedItem: () => get().carts.filter((x) => x.isSelected === true),
	getUnSelectedItem: () => get().carts.filter((x) => x.isSelected === false),
	getTotalItem: () =>
		get().carts.reduce((acc, current) => (acc += current.quantity), 0),
	getTotalPrice: () =>
		get()
			.carts.filter((x) => x.isSelected === true)
			.reduce((acc, current) => (acc += current.quantity * current.price), 0),
	getCheckoutPrice: () =>
		get().checkout.reduce(
			(acc, current) => (acc += current.quantity * current.price),
			0
		),
	getCheckoutTotalItem: () => get().checkout.length,
}));

export default useMarketStore;
