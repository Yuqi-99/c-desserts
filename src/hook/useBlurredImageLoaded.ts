import { useEffect } from 'react';

export const useBlurredImageLoader = (selector: string) => {
	useEffect(() => {
		const updateImages = () => {
			const blurredImageDivs = document.querySelectorAll(selector);

			blurredImageDivs.forEach((element) => {
				const img = element.querySelector('img');

				const loaded = () => {
					element.classList.add('loaded');
					element.classList.remove('animate-pulse');
					element.classList.remove('blurred-img');
				};

				if (img?.complete) {
					loaded();
				} else {
					img?.addEventListener('load', loaded);
					return () => img?.removeEventListener('load', loaded);
				}
				return () => {};
			});
		};

		updateImages();

		const observer = new MutationObserver(() => {
			updateImages();
		});

		observer.observe(document.body, { childList: true, subtree: true });

		return () => observer.disconnect();
	}, [selector]);
};
