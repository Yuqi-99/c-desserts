import { Card } from 'src/components/Card';
import { Cart } from 'src/components/Cart';
import DessertData from 'src/data/data.json';
// import LogoIcon from 'src/assets/images/illustration-empty-cart.svg?react';
// import { motion } from 'framer-motion';

export const Category = () => {
	return (
		<div className='flex h-full w-full flex-col justify-between gap-4 md:flex-row'>
			<div className='w-full md:w-2/3'>
				<p className='mb-8 text-3xl font-bold text-black'>Desserts</p>
				<div className='flex flex-wrap items-center justify-center gap-2 sm:justify-between'>
					{DessertData.map((item) => {
						return (
							<Card
								key={item.name}
								img={item.image.tablet}
								category={item.category}
								name={item.name}
								price={item.price}
							/>
						);
					})}
				</div>
			</div>
			<div className='md:w-1/3'>
				<Cart />
			</div>
		</div>
	);
};
