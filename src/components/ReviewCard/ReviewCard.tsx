import { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './review.module.css';

type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
};

type Props = {
  review: Review;
};

const ReviewCard: FunctionComponent<Props> = function ({ review }) {
  return (
    <article className={styles.card}>
      <div>
        <Image
          src="/photo.svg"
          alt="Profile Picture"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className={styles.review}>
        <div className={styles['review-title']}>
          <h1>{review.name}</h1>
          <span>Оценка: {review.rating}</span>
        </div>
        <p>{review.text}</p>
      </div>
    </article>
  );
};

export default ReviewCard;
