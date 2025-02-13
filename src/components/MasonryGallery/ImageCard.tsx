import { GalleryEntity } from "@/gallery/domain/gallery.entity";


const ImageCard: React.FC<{ image: GalleryEntity }> = ({ image }) => {
  return (
    <div className="break-inside-avoid mb-4 overflow-hidden shadow-lg">
      <img
        src={image.largeImageURL}
        alt={image.type}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ImageCard;