import { useCartStore } from 'src/store/useCartStore';
import { cn } from 'src/utils/cn';
import { formatAmount } from 'src/utils/formatAmount';

type TCartItem = {
	name: string;
	price: number;
	quantity: number;
	total: number;
	showDelete?: boolean;
};

export const CartItem = ({ name, price, quantity, total, showDelete = true }: TCartItem) => {
	const { removeFromCart } = useCartStore();

	return (
		<div className='flex items-center justify-between py-4'>
			<div className={cn('flex flex-col justify-between', showDelete ? 'w-4/5' : 'w-1/2')}>
				<p className='text-sm font-semibold text-cartItemName'>{name}</p>
				<div className='mt-1 flex items-center justify-between'>
					<p className='text-sm font-semibold text-cartTitle'>{quantity}x</p>
					<p className='text-xs font-light text-cartSinglePrice'>@{formatAmount(price)}</p>
					{showDelete && (
						<p className='text-sm font-medium text-cartItemPrice'>RM {formatAmount(total)}</p>
					)}
				</div>
			</div>
			{showDelete ? (
				<div
					className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-cartItemPrice text-cartItemPrice'
					id='deleteButton'
					onClickCapture={() => {
						removeFromCart(name);
					}}
				>
					<span className='text-sm font-bold'>X</span>
				</div>
			) : (
				<div className='flex items-center justify-center'>
					<p className='text-sm font-medium text-cartItemName'>RM {formatAmount(total)}</p>
				</div>
			)}
		</div>
	);
};
