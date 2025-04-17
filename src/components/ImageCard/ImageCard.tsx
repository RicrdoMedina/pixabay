import { GalleryEntity } from '@/gallery/domain/GalleryEntity';
import Link from 'next/link';

type ImageCardProps = {
	image: GalleryEntity;
	overlay?: React.ReactNode;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, overlay: Overlay }) => {
	return (
		<div
			className="break-inside-avoid relative mb-4 overflow-hidden shadow-lg group cursor-pointer"
			data-testid="image-card"
		>
			<Link className="w-full h-full" href={image.url}>
				<div className="w-full h-full">
					{Overlay && image.verified && <>{Overlay}</>}

					{image.verified ? (
						<img
							src={image.largeImageURL}
							alt={image.tags}
							className="w-full h-auto object-cover"
						/>
					) : (
						<div
							className="w-full h-48 bg-gray-200 flex items-center justify-center"
							role="img"
							aria-label="No image available"
						>
							<span className="text-gray-500">No image available</span>
						</div>
					)}
				</div>
			</Link>
		</div>
	);
};

export default ImageCard;
