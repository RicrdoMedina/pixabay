// hooks/useModal.ts
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from '@/store/slices/modal/modal-slices';
import { ReactNode } from 'react';

export function useModal() {
  const dispatch = useDispatch();

  function showModal(content: ReactNode) {
    dispatch(openModal(content));
  }

  function hideModal() {
    dispatch(closeModal());
  }

  return { showModal, hideModal };
}
