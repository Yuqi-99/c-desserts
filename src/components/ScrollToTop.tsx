import IconArrowUp from 'src/assets/icon-arrow-up.svg?react';
import { useEffect, useState } from 'react';

export const ScrollToTop = () => {
	const goToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > window.innerHeight * 0.5) {
				setShowBtn(true);
			} else {
				setShowBtn(false);
			}
		});

		return () => {
			window.removeEventListener('scroll', () => {
				if (window.scrollY > window.innerHeight * 0.5) {
					setShowBtn(true);
				} else {
					setShowBtn(false);
				}
			});
		};
	});

	const [showBtn, setShowBtn] = useState<boolean>(false);

	return (
		<>
			{showBtn && (
				<IconArrowUp
					width={64}
					height={64}
					className='fixed bottom-20 right-5 z-50 flex cursor-pointer rounded-full bg-addToCartIcon p-4 opacity-75 shadow-sm'
					onClick={goToTop}
				/>
			)}
		</>
	);
};
