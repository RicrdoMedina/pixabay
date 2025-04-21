'use client';

import WrapperGallery from '@/layout/WrapperGallery/WrapperGallery';
import { withGallerySync } from '@/hoc/with-gallery-sync';
import { setInitialGalleryItems } from '@/store/slices/gallery/gallery-slice';
import { RootState } from '@/store/store';
import { GalleryEntity } from '@/gallery/domain/gallery-entity';

type Props = {
	initialData: GalleryEntity[];
	title: string;
	subtitle?: string;
};

const selectGalleryItems = (state: RootState) => state.gallery.items;

const WrapperGalleryWithState = withGallerySync(
	WrapperGallery,
	setInitialGalleryItems,
	selectGalleryItems
);

export default function GalleryPage({ initialData, title, subtitle }: Props) {
	return (
		<WrapperGalleryWithState
			initialData={initialData}
			title={title}
			subtitle={subtitle}
		/>
	);
}
