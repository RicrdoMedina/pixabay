'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import Button from '@/components/Button/Button';
import { closeModal } from '@/store/slices/modal/modal-slices';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef } from 'react';

const ModalRoot = () => {
	const { isOpen, content } = useSelector((state: RootState) => state.modal);
	const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        modalRef.current?.focus();
      }, 0);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

	if (!isOpen || !content) return null;

	return (
		<div ref={modalRef} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" tabIndex={-1}>
			<div
				className="bg-white rounded-lg relative"
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
			>
				<Button
					onClick={() => dispatch(closeModal())}
					className="absolute top-2 -right-6 text-white cursor-pointer bg-red"
					aria-label="Close modal"
					iconPosition="left"
					icon={
						<span className="block w-4 h-4">
							<XMarkIcon />
						</span>
					}
				/>
				{content}
			</div>
		</div>
	);
};

export default ModalRoot;
