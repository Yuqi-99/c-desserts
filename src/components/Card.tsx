import { AddToCardButton } from 'src/components/AddToCardButton';
import { formatAmount } from 'src/utils/formatAmount';
import { motion } from 'framer-motion';

type TCard = {
	img: string;
	category: string;
	name: string;
	price: number;
};

export const Card = ({ img, category, name, price }: TCard) => {
	return (
		<div className='mt-2 flex flex-col sm:w-[48%] lg:w-[32%]'>
			<div className='relative flex h-fit w-fit flex-col items-center'>
				<img src={img} alt={name} className='w-full rounded-lg' />
				<motion.div className='absolute -bottom-6' whileHover={{ scale: 1.1 }}>
					{/* <div className='absolute -bottom-6'> */}
					<AddToCardButton name={name} price={price} />
					{/* </div> */}
				</motion.div>
			</div>
			<div className='mt-10'>
				<p className='text-xs text-categoryText'>{category}</p>
				<p className='text-sm font-semibold text-name'>{name}</p>
				<p className='text-sm font-semibold text-price'>RM {formatAmount(price)}</p>
			</div>
		</div>
	);
};
