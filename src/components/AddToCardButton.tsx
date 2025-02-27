import { useEffect, useRef, useState } from 'react';
import CartIcon from 'src/assets/cart.svg?react';
import { useCartStore } from 'src/store/useCartStore';

type TAddToCartButton = {
	name: string;
	price: number;
};

export const AddToCardButton = ({ name, price }: TAddToCartButton) => {
	const cartRef = useRef<HTMLDivElement>(null);
	const [click, setClick] = useState<boolean>(false);
	const [quantity, setQuantity] = useState<number>(1);
	const { cart, setCart, removeFromCart } = useCartStore();
	const existingItem = cart.find((item) => item.name === name);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
				setClick(false);
			}
		};

		if (click) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [click]);

	useEffect(() => {
		if (click && quantity > 0) {
			setCart({ name, price, quantity, total: quantity * price });
		} else if (quantity === 0) {
			removeFromCart(name);
		}
	}, [quantity, click]);

	return click ? (
		<div
			ref={cartRef}
			className='flex w-36 cursor-pointer items-center justify-between rounded-full border border-solid border-addToCartBgClicked bg-addToCartBgClicked px-4 py-3 text-white'
			onBlur={() => {
				setClick(false);
			}}
		>
			<div
				className='border-1 flex h-4 w-4 items-center justify-center rounded-full border border-white'
				id='cartButtonMinus'
				onClickCapture={() => {
					if (quantity > 0) {
						setQuantity(quantity - 1);
					}
				}}
			>
				<span className='-mt-0.5 text-sm font-medium'>-</span>
			</div>
			<p className='text-sm font-medium'>{quantity}</p>
			<div
				className='border-1 flex h-4 w-4 items-center justify-center rounded-full border border-white'
				id='cartButtonPlus'
				onClickCapture={() => setQuantity(quantity + 1)}
			>
				<p className='-mt-0.5 text-sm font-medium'>+</p>
			</div>
		</div>
	) : (
		<div
			className='flex w-36 cursor-pointer rounded-full border border-solid border-addToCartBorder bg-addToCartBg px-4 py-3 text-addToCartText'
			id='cartButton'
			onClickCapture={() => {
				setClick(true);
				if (quantity === 0 || existingItem === undefined) {
					setQuantity(1);
				}
			}}
		>
			<CartIcon className='mr-2 size-5' />
			<p className='text-sm font-medium'>Add to Cart</p>
		</div>
	);
};
