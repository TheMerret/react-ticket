'use client';

import { FunctionComponent, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './modal.module.css';

import { cartActions } from '@/redux/features/cart';

type Props = {
  filmId: string;
  closeModal: () => void;
};

const DeletionModal: FunctionComponent<Props> = function ({
  filmId,
  closeModal,
}) {
  const dispatch = useDispatch();

  const remove = useCallback(() => {
    dispatch(cartActions.remove(filmId));
    closeModal();
  }, [dispatch, filmId, closeModal]);

  return (
    <div className={styles.modal}>
      <div className={styles.title}>
        <h2>Удаление билета</h2>
        <button
          onClick={closeModal}
          type="submit"
          aria-label="close"
          formMethod="dialog"
        >
          X
        </button>
      </div>
      <p>Вы уверены, что хотите удалить билет?</p>
      <div className={styles.buttons}>
        <button onClick={remove}>Да</button>
        <button onClick={closeModal}>Нет</button>
      </div>
    </div>
  );
};

export default DeletionModal;
