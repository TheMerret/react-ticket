'use client';

import { FunctionComponent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

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
          className={styles.close}
          onClick={closeModal}
          type="submit"
          aria-label="close"
          formMethod="dialog"
        >
          <Image src="/close.svg" alt="close" width={20} height={20}></Image>
        </button>
      </div>
      <p>Вы уверены, что хотите удалить билет?</p>
      <div className={styles.buttons}>
        <button className={styles.primary} onClick={remove}>
          Да
        </button>
        <button className={styles.secondary} onClick={closeModal}>
          Нет
        </button>
      </div>
    </div>
  );
};

export default DeletionModal;
