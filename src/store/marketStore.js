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
	orderHistory: [
		{
			id: 222,
			order: [
				{
					id: 22,
					quantity: 2,
					stock: 5,
					name: 'name 2',
					image: 'affogato.jpg',
					price: 42000,
					isSelected: true,
				},
				{
					id: 22,
					quantity: 2,
					stock: 5,
					name: 'name 2',
					image: 'affogato.jpg',
					price: 42000,
					isSelected: true,
				},
				{
					id: 22,
					quantity: 2,
					stock: 5,
					name: 'name 2',
					image: 'affogato.jpg',
					price: 42000,
					isSelected: true,
				},
			],
			date: new Date(),
			totalPrice: 100,
			totalItem: 4,
			tunai: 200,
			kembalian: 100,
		},
	],
	pendingPayment: [],
	notification: false,
	notificationNum: [],
	notificationText: '',
	isSelectAll: true,
	isLoading: false,
	modal: [],
	modalActive: false,
	setIsLoading: (loading) => {
		set({ isLoading: loading });
	},
	Notification: (text) => {
		set((state) => ({
			notification: true,
			notificationNum: [...state.notificationNum, true],
			notificationText: text,
		}));
		// jeda klik addToCart
		setTimeout(() => {
			set(() => ({
				notification: false,
			}));
			console.log(get().notificationNum);
		}, 400);
		// Waktu notifikasinya
		setTimeout(() => {
			set((state) => ({
				notificationNum: state.notificationNum.slice(1),
			}));
			console.log(get().notificationNum);
		}, 1500);
	},
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
	checkoutCart: () => {
		set({
			checkout: get().getSelectedItem(),
		});
		setTimeout(() => {
			set({
				carts: get().getUnSelectedItem(),
			});
		}, 1000);
		console.log(get().checkout);
	},
	order: () => {
		set({
			pendingPayment: get().checkout,
		});
		setTimeout(() => {
			set({
				checkout: [],
			});
		}, 1000);

		console.log(get().pendingPayment);
	},
	sendToModal: (obj) => {
		set({ modal: obj });
	},
	closeModal: () => {
		set({ modal: [] });
	},
	// payment
	addToOrderHistory: (bayar, kembalian) => {
		set((state) => ({
			orderHistory: [
				...get().orderHistory,
				(state.orderHistory = {
					id: isNaN(state.id) ? 1 : state.id + 1,
					order: get().pendingPayment,
					date: new Date(),
					totalPrice: get().getCheckoutPrice(),
					totalItem: get().getCheckoutTotalItem(),
					tunai: bayar,
					kembalian: kembalian,
				}),
			],
		}));
		get().products.map((y) => {
			get().pendingPayment.map((x) => {
				if (x.id === y.id) y.stock = y.stock - x.quantity;
			});
		});
		setTimeout(() => {
			set({
				checkout: [],
				pendingPayment: [],
			});
		}, 2000);

		console.log(get().orderHistory);
	},
	addToCart: (obj) => {
		setTimeout(() => {
			console.log(get().carts);
		}, 1000);
		// jika id nya ad
		if (get().carts.some((x) => x.id === obj.id)) {
			// jika id nya ada maka tambah quantity
			set((state) => ({
				carts: state.carts.map((x) => {
					if (x.id === obj.id) {
						if (x.quantity < obj.stock) {
							x.quantity += 1;
							get().Notification('1 item added to cart');
						} else {
							get().Notification('tidak bisa menambahkan item lebih banyak');
						}
					}
					return x;
				}),
			}));
		} else {
			// jika id nya tidak ada tambahkan objek baru
			get().Notification('1 item added to cart');
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
		}
	},
	addQuantity: (id) => {
		console.log(get().carts);
		set((state) =>
			state.carts.map((x) => {
				if (x.id === id) {
					if (x.quantity < x.stock) {
						if (x.quantity >= 1) x.quantity = x.quantity + 1;
						if (x.quantity === 0) x.quantity = 1;
					} else {
						get().Notification('Maaf Stock Sisa :' + x.stock);
						x.quantity = x.stock;
					}
				}
			})
		);
	},
	substractQuantity: (id) => {
		console.log(get().carts);
		set((state) =>
			state.carts.map((x) => {
				if (x.id === id) {
					if (x.quantity >= 1) x.quantity = x.quantity - 1;
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
					? `${get().getSelectedItem().length} items deleted`
					: `${get().getSelectedItem().length} item deleted`
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
		set((state) =>
			state.carts.filter((x) => x.isSelected === true).length ===
			state.carts.length
				? { isSelectAll: true }
				: { isSelectAll: false }
		);
	},
	updateStock: () => {},
	setSelectedAll: (checked) => {
		console.log(get().carts);
		set(() => ({ isSelectAll: checked }));
		set((state) => state.carts.map((x) => (x.isSelected = checked)));
	},
	getSelectedItem: () => get().carts.filter((x) => x.isSelected === true),
	getUnSelectedItem: () => get().carts.filter((x) => x.isSelected === false),
	getTotalItem: () =>
		get()
			.carts.filter((x) => x.isSelected === true)
			.reduce((acc, current) => (acc += current.quantity), 0),
	getTotalPrice: () =>
		get()
			.carts.filter((x) => x.isSelected === true)
			.reduce((acc, current) => (acc += current.quantity * current.price), 0),
	getCheckoutPrice: () =>
		get().checkout.reduce(
			(acc, current) => (acc += current.quantity * current.price),
			0
		),
	getOrderPrice: () =>
		get().pendingPayment.reduce(
			(acc, current) => (acc += current.quantity * current.price),
			0
		),
	getCheckoutTotalItem: () => get().checkout.length,
}));

export default useMarketStore;
