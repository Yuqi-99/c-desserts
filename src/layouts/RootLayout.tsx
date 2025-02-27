import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
	return (
		<main className='flex justify-center'>
			<div
				id='content-wrapper'
				className='polyfill-min-h-screen relative w-full min-w-[280px] max-w-[1440px] bg-background p-12 sm:p-16'
			>
				<Outlet />
			</div>
		</main>
	);
};
