import { useNavigate } from 'react-router-dom';
import LogoIcon from 'src/assets/images/illustration-empty-cart.svg?react';
import { motion } from 'framer-motion';

export const Home = () => {
	const navigate = useNavigate();
	return (
		<div className='flex h-full w-full flex-col items-center justify-center'>
			<motion.div
				animate={{ y: [0, 50, 0] }}
				transition={{
					repeat: Infinity,
				}}
			>
				<LogoIcon className='size-64' />
			</motion.div>

			<motion.div
				className='mt-8 flex w-full cursor-pointer items-center justify-center'
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.9, transition: { duration: 4 } }}
			>
				<button
					type='button'
					className='mt-4 w-1/2 rounded-full bg-addToCartBorder px-5 py-4 text-white md:w-1/4'
					onClick={() => navigate('/category')}
					id='startButton'
				>
					Start
				</button>
			</motion.div>
		</div>
	);
};
