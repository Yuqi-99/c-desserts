import { useState } from 'react';
import EmptyCart from 'src/assets/empty-cart.svg?react';
import { CartItem } from 'src/components/CartItem';
import { Modal } from 'src/components/Modal';
import { useCartStore } from 'src/store/useCartStore';
import { formatAmount } from 'src/utils/formatAmount';

export const Cart = () => {
	const { cart } = useCartStore();
	const [confirm, setConfirm] = useState<boolean>(false);
	const orderTotal = cart?.reduce((total, item) => total + item.total, 0);
	return (
		<>
			<div className='mt-4 flex flex-col items-center rounded-lg bg-white p-4 md:mt-0'>
				<p className='mb-4 w-full text-left text-lg font-bold text-cartTitle'>Your Cart</p>
				{cart?.length === 0 ? (
					<>
						<EmptyCart className='size-48 lg:w-fit' />
						<p className='text-center text-sm font-semibold text-categoryText'>
							Your added items will appear here
						</p>
					</>
				) : (
					<div className='w-full'>
						{cart?.map((item) => {
							return (
								<div className='w-full' key={item.name}>
									<CartItem
										name={item.name}
										price={item.price}
										quantity={item.quantity}
										total={item.total}
									/>
									<hr />
								</div>
							);
						})}
						<div className='flex w-full items-center justify-between py-6'>
							<p className='text-sm font-normal text-cartItemPrice'>Order Total</p>
							<p className='text-lg font-bold text-cartItemName'>RM {formatAmount(orderTotal)}</p>
						</div>

						<div className='flex items-center justify-center rounded-md bg-background py-4'>
							<p className='text-sm font-normal text-cartItemPrice'>
								This is a <span className='font-bold text-cartItemName'>carbon-neutral</span>{' '}
								delivery
							</p>
						</div>

						<button
							type='button'
							className='mt-4 w-full rounded-full bg-confirmButton px-5 py-4 text-white'
							onClick={() => setConfirm(true)}
						>
							Confirm Order
						</button>
					</div>
				)}
			</div>

			{confirm && <Modal onClose={() => setConfirm(false)} />}
		</>
	);
};
