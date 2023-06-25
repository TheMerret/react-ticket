import Image from 'next/image';
import { FunctionComponent } from 'react';

import styles from './buttons.module.css';

type Props = {
  count: number;
  deletable: boolean;
};

export const EditButtons: FunctionComponent<Props> = function ({
  count,
  deletable,
}) {
  return (
    <>
      <div className={styles.edit}>
        <button>
          <Image src="/minus.svg" alt="close" width="12" height="12"></Image>
        </button>
        {count}
        <button>
          <Image src="/plus.svg" alt="close" width="12" height="12"></Image>
        </button>
      </div>
      {deletable && (
        <button className={styles.close}>
          <Image
            src="/close.svg"
            alt="close"
            width={12.5}
            height={12.5}
          ></Image>
        </button>
      )}
    </>
  );
};
