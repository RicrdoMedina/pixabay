import { GalleryEntity } from '@/gallery/domain/GalleryEntity';
import Link from 'next/link';

type ImageCardProps = {
	image: GalleryEntity;
	overlay?: React.ReactNode;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, overlay: Overlay }) => {
	return (
		<div className="break-inside-avoid relative mb-4 overflow-hidden shadow-lg group cursor-pointer">
			<Link className="w-full h-full" href="/">
				<div className="w-full h-full">
					{Overlay && <>{Overlay}</>}

					<img
						data-testid="image-card"
						src={image.largeImageURL}
						alt={image.type}
						className="w-full h-auto object-cover"
					/>
				</div>
			</Link>
		</div>
	);
};

export default ImageCard;
