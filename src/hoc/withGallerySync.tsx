'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';

type withGallerySyncProps<T> = {
	initialData: T[];
  title: string
};

export function withGallerySync<T>(
	Component: React.ComponentType<{ items: T[], title: string }>,
	fetchAction: (data: T[]) => any,
	selectData: (state: RootState) => T[]
) {
	return function WrappedComponent({ initialData, title }: withGallerySyncProps<T>) {
		const dispatch = useDispatch<AppDispatch>();
		const items = useSelector(selectData);

		useEffect(() => {
			if (items.length === 0 && initialData.length > 0) {
				dispatch(fetchAction(initialData));
			}
		}, [items, initialData, dispatch]);

		return (
			<Component
				items={items}
				title={title}
			/>
		);
	};
}
