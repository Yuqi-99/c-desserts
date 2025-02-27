type TModalOverlayProps = {
	onClose: () => void;
};

export const ModalOverlay = ({ onClose }: TModalOverlayProps) => {
	return (
		<div
			className='polyfill-h-screen fixed left-1/2 top-0 w-screen -translate-x-1/2 bg-black bg-opacity-50'
			onClick={onClose}
			onKeyDown={(e) => {
				if (e.key === 'Escape') {
					onClose();
				}
			}}
		/>
	);
};
