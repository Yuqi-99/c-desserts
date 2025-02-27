import { Outlet } from 'react-router-dom';
import { ScrollToTop } from 'src/components/ScrollToTop';

export const RootLayout = () => {
	return (
		<main className='flex justify-center'>
			<div
				id='content-wrapper'
				className='polyfill-min-h-screen relative w-full min-w-[280px] max-w-[1440px] bg-background p-10 sm:p-16'
			>
				<Outlet />
				<ScrollToTop />
			</div>
		</main>
	);
};
