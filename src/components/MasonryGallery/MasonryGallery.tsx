import ImageCard from "@/components/MasonryGallery/ImageCard";
import { GalleryEntity } from "@/gallery/domain/GalleryEntity";

type GalleryProps = {
  items: GalleryEntity[];
};

const MasonryGallery: React.FC<GalleryProps> = ({ items }) => {
	return (
		<div className="columns md:columns-2 lg:columns-3 xl:columns-4 gap-4" data-testid="masonry-gallery">
			{items.map(image => (
				<ImageCard key={image.id} image={image} />
			))}
		</div>
	);
};

export default MasonryGallery;
