import { CartItem } from 'src/components/CartItem';
import { ModalOverlay } from 'src/components/ModalOverlay';
import { useCartStore } from 'src/store/useCartStore';
import { formatAmount } from 'src/utils/formatAmount';
import CompleteIcon from 'src/assets/complete-icon.svg?react';
import { cn } from 'src/utils/cn';

type TModal = {
	onClose: () => void;
};

export const Modal = ({ onClose }: TModal) => {
	const { cart, resetCart } = useCartStore();
	const orderTotal = cart?.reduce((total, item) => total + item.total, 0);

	return (
		<div className='z-modal fixed flex h-full min-h-[540px] w-full sm:max-w-[540px]'>
			<ModalOverlay
				onClose={() => {
					onClose();
				}}
			/>
			<div className='polyfill-h-screen z-modal-content fixed left-1/2 top-1/2 flex h-auto max-h-[90vh] w-screen min-w-[inherit] max-w-[inherit] -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
				<div className='z-modal-content absolute flex h-auto max-h-[90vh] w-full justify-center overflow-scroll rounded-xl bg-white p-8'>
					<div className='w-full'>
						<div className='flex flex-row items-center'>
							<CompleteIcon />
							<p className='ml-2 text-3xl font-bold text-cartItemName'>Order Confirmed</p>
						</div>
						<p className='my-2 text-sm text-cartSinglePrice'>
							We hope you enjoy yor food and have a great day!
						</p>
						<div className='mt-4 w-full rounded-lg bg-background px-4'>
							{cart?.map((item) => {
								return (
									<div className='w-full' key={item.name}>
										<CartItem
											name={item.name}
											price={item.price}
											quantity={item.quantity}
											total={item.total}
											showDelete={false}
										/>
										<hr />
									</div>
								);
							})}

							<div className='flex w-full items-center justify-between py-6'>
								<p className='text-sm font-normal text-cartItemPrice'>Order Total</p>
								<p className='text-lg font-bold text-cartItemName'>RM {formatAmount(orderTotal)}</p>
							</div>
						</div>
						<button
							type='button'
							className={cn(
								'mt-8 w-full rounded-full bg-cartTitle px-5 py-3 text-white',
								cart?.length > 3 && 'mb-8'
							)}
							onClick={async () => {
								await resetCart();
								onClose();
							}}
						>
							Start New Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
