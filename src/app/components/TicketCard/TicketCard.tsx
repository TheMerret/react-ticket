import Image from 'next/image';
import { FunctionComponent } from 'react';

type Props = {
  posterSrc: string;
  title: string;
  genre: string;
  count?: number;
  deletable?: boolean;
};

export const TicketCard: FunctionComponent<Props> = function ({
  posterSrc,
  title,
  genre,
  count = 0,
  deletable = false,
}) {
  return (
    <div>
      <Image
        src={posterSrc}
        alt="Film Poster"
        width="100"
        height="120"
      ></Image>
      <span>{title}</span>
      <span>{genre}</span>
      <span>
        <Image src="/minus.svg" alt="close" width="12" height="12"></Image>
        {count}
        <Image src="/plus.svg" alt="close" width="12" height="12"></Image>
      </span>
      {deletable && (
        <button>
          <Image
            src="/close.svg"
            alt="close"
            width={12.5}
            height={12.5}
          ></Image>
        </button>
      )}
    </div>
  );
};
