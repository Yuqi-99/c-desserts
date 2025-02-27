import { Card } from 'src/components/Card';
import { Cart } from 'src/components/Cart';
import DessertData from 'src/data/data.json';

export const Category = () => {
	const width = window.innerWidth;
	return (
		<div className='flex h-full w-full flex-col justify-between gap-4 md:flex-row'>
			<div className='md:w-2/3'>
				<p className='mb-8 text-3xl font-bold text-black'>Desserts</p>
				<div className='flex flex-wrap justify-between gap-2'>
					{DessertData.map((item) => {
						return (
							<Card
								key={item.name}
								img={width < 641 ? item.image.mobile : item.image.desktop}
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
