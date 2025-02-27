import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NotFoundPage = () => {
	return (
		<main className='flex h-screen justify-center bg-background'>
			<div className='relative flex w-full min-w-[280px] max-w-[450px]'>
				<div className='flex-gap-y-8 mx-4 flex w-full flex-col items-center justify-center'>
					<div className='space-y-2 text-center'>
						<p className='text-darkGrey-normal text-3xl font-bold'>Page Not Found</p>
						<p className='text-grey-dark text-lg font-normal'>
							Cannot find a page you are looking for
						</p>
					</div>
					<motion.div
						className='mt-8 flex w-full cursor-pointer items-center justify-center'
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9, transition: { duration: 4 } }}
					>
						<Link
							to='/'
							className='mt-8 flex items-center rounded-full border border-addToCartBorder px-16 py-4 text-sm font-semibold text-cartItemName'
						>
							Back to Home
						</Link>
					</motion.div>
				</div>
			</div>
		</main>
	);
};
