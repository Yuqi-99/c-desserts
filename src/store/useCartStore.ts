import { create } from 'zustand';

type TcartItem = { name: string; price: number; quantity: number; total: number };

type CartState = {
	cart: TcartItem[];
	setCart: (cart: TcartItem) => void;
	removeFromCart: (name: string) => void;
	resetCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
	cart: [],
	setCart: (item: TcartItem) =>
		set((prev) => {
			const existingItem = prev.cart.find((cartItem) => cartItem.name === item.name);
			if (existingItem) {
				return {
					cart: prev.cart.map((cartItem) =>
						cartItem.name === item.name
							? { ...cartItem, quantity: item.quantity, total: item.total }
							: cartItem
					),
				};
			} else {
				return { cart: [...prev.cart, item] };
			}
		}),
	removeFromCart: (name: string) =>
		set((prev) => ({
			cart: prev.cart.filter((cartItem) => cartItem.name !== name), // ✅ 过滤掉要删除的商品
		})),

	resetCart: () => set({ cart: [] }),
}));
