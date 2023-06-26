'use client';

import { FunctionComponent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './wrapper.module.css';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

const ModalWrapper: FunctionComponent<Props> = function ({
  children,
  isOpen,
  setIsOpen,
}) {
  return createPortal(
    <div className={styles.container} onClick={() => setIsOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalWrapper;
