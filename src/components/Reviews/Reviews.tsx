'use client';

import { FunctionComponent } from 'react';

import ReviewCard from '../ReviewCard/ReviewCard';

import { useGetReviewsByMovieIdQuery } from '@/redux/services/movieApi';

type Props = {
  filmId: string;
};

const Reviews: FunctionComponent<Props> = function ({ filmId }) {
  const { data, isLoading, error } = useGetReviewsByMovieIdQuery(filmId);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>Not found</span>;
  }

  let reviews = [...data];
  reviews = reviews.filter(
    (item, index, self) => index === self.findIndex((i) => i.id === item.id)
  );

  return (
    <>
      {reviews.map((review) => (
        <ReviewCard review={review} key={review.id}></ReviewCard>
      ))}
    </>
  );
};

export default Reviews;
