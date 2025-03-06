export const galleryStyles = {
	button: {
		active: 'bg-white text-black',
		inactive: 'hover:bg-white',
		default:
			'w-full md:w-auto py-1 md:py-0 px-3 md:px-4 rounded-full flex items-center justify-center font-sans text-sm text-regular font-bold h-8',
	},
	tooltip: {
		fav: {
			default:
				'absolute top-4 left-4 w-7 h-7 bg-white-opacity-30 border border-gray-200 hover:border-white rounded-md text-white flex items-center justify-center cursor-pointer ease-in-out transition-all duration-500 z-20',
			icon: 'w-4 h-4',
		},
		add: {
			default:
				'absolute top-4 left-14 w-7 h-7 bg-white-opacity-30 border border-gray-200 hover:border-white rounded-md text-white flex items-center justify-center cursor-pointer ease-in-out transition-all duration-500 z-20',
			icon: 'w-4 h-4',
		},
		edit: {
			default:
				'absolute top-4 right-4 w-7 h-7 rounded-md text-white flex items-center justify-center cursor-pointer ease-in-out transition-all duration-500 z-20',
			icon: 'w-4 h-4',
		},
	},
};
