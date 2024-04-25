import { produce } from 'immer';
import { create } from 'zustand';
import { products } from '../data/data';

const useMarketStore = create((set, get) => ({
	products: products,
	carts: [
		{
			id: 213,
			quantity: 1,
			stock: 5,
			name: 'name',
			image: 'affogato.jpg',
			price: 222,
			isSelected: true,
		},
	],
	notification: false,
	notificationText: '',

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
	getTotalItem: () =>
		get().carts.reduce((acc, current) => (acc += current.quantity), 0),
}));

export default useMarketStore;
