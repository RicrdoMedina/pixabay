import ImageCard from "@/components/MasonryGallery/ImageCard";
import { GalleryEntity } from "@/gallery/domain/gallery.entity";

type GalleryProps = {
  items: GalleryEntity[];
};

const MasonryGallery: React.FC<GalleryProps> = ({ items }) => {
	return (
		<div className="columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
			{items.map(image => (
				<ImageCard key={image.id} image={image} />
			))}
		</div>
	);
};

export default MasonryGallery;
