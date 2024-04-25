import { create } from 'zustand';
import { products } from '../data/data';

const useMarketStore = create((set, get) => ({
	products: products,
	cart: [
		// {
		// 	id: 213,
		// 	quantity: 1,
		// 	name: 'obj.name',
		// 	price: 222,
		// 	isSelected: true,
		// },
	],
	notification: false,
	setNotification: () => {
		set(() => ({
			notification: true,
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
		get().setNotification();
		setTimeout(() => {
			console.log(get().cart);
		}, 2000);
		// jika id nya ad
		get().cart.some((x) => x.id === obj.id)
			? // jika id nya ada maka tambah quantity
			  set((state) => ({
					cart: state.cart.map((x) => {
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
					cart: [
						...state.cart,
						{
							id: obj.id,
							quantity: 1,
							stock: obj.stock,
							name: obj.name,
							price: obj.price,
							isSelected: true,
						},
					],
			  }));
	},
	getTotalItem: () =>
		get().cart.reduce((acc, current) => (acc += +current.quantity), 0),
}));

export default useMarketStore;
