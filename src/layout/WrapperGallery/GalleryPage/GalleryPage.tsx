'use client';

import WrapperGallery from '@/layout/WrapperGallery/WrapperGallery';
import { withGallerySync } from '@/hoc/withGallerySync';
import { setInitialGalleryItems } from '@/store/slices/gallerySlice';
import { RootState } from '@/store/store';
import { GalleryEntity } from '@/gallery/domain/GalleryEntity';

type Props = {
	initialData: GalleryEntity[];
	title: string;
};

const selectGalleryItems = (state: RootState) => state.gallery.items;

const WrapperGalleryWithState = withGallerySync(
	WrapperGallery,
	setInitialGalleryItems,
	selectGalleryItems
);

export default function GalleryPage({ initialData, title }: Props) {
	return (
		<WrapperGalleryWithState
			initialData={initialData}
			title={title}
		/>
	);
}
