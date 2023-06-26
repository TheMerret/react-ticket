import Image from 'next/image';
import { FunctionComponent, useCallback, useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DeletionModal from '../DeletionModal/DeletionModal';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

import styles from './buttons.module.css';

import { selectProductAmount } from '@/redux/features/cart/selector';
import { MAX_TICKETS, cartActions } from '@/redux/features/cart';
import { TicketsContext } from '@/contexts/TicketsContext';

type Props = {
  movieId: string;
};

export const EditButtons: FunctionComponent<Props> = function ({ movieId }) {
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const { isRemoveButtonAdded } = useContext(TicketsContext);
  const ticketsAmount = useSelector((state) =>
    selectProductAmount(state, movieId)
  );
  const dispatch = useDispatch();
  const decrement = useCallback(() => {
    if (ticketsAmount === 1) {
      setIsRemoveModalOpen(true);
    } else if (ticketsAmount > 0) {
      dispatch(cartActions.decrement(movieId));
    }
  }, [dispatch, movieId, ticketsAmount]);
  const increment = useCallback(() => {
    if (ticketsAmount < MAX_TICKETS) {
      dispatch(cartActions.increment(movieId));
    }
  }, [dispatch, movieId, ticketsAmount]);
  return (
    <>
      <div className={styles.edit}>
        <button disabled={ticketsAmount === 0} onClick={decrement}>
          <Image src="/minus.svg" alt="minus" width="12" height="12"></Image>
        </button>
        <p>{ticketsAmount}</p>
        <button disabled={ticketsAmount >= MAX_TICKETS} onClick={increment}>
          <Image src="/plus.svg" alt="plus" width="12" height="12"></Image>
        </button>
      </div>
      {isRemoveButtonAdded && (
        <button
          onClick={() => setIsRemoveModalOpen((isOpen) => !isOpen)}
          className={styles.close}
        >
          <Image
            src="/close.svg"
            alt="close"
            width={12.5}
            height={12.5}
          ></Image>
        </button>
      )}
      {isRemoveModalOpen && (
        <ModalWrapper
          isOpen={isRemoveModalOpen}
          setIsOpen={setIsRemoveModalOpen}
        >
          <DeletionModal
            filmId={movieId}
            closeModal={() => setIsRemoveModalOpen((isOpen) => !isOpen)}
          ></DeletionModal>
        </ModalWrapper>
      )}
    </>
  );
};
