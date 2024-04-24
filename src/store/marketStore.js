import { create } from 'zustand';
import { products } from '../data/data';

const useMarketStore = create((set) => ({
	products: products,
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
}));

export default useMarketStore;
