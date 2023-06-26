'use client';

import { Provider } from 'react-redux';
import { FunctionComponent, ReactNode } from 'react';

import { store } from './store';

type Props = {
  children: ReactNode;
};

export const StoreProvider: FunctionComponent<Props> = function ({
  children,
}) {
  return <Provider store={store}>{children}</Provider>;
};
