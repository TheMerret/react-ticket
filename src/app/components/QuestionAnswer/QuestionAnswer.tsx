import { FunctionComponent, ReactElement } from 'react';

type Props = {
  question: string;
  children: ReactElement;
};

export const QuestionAnswer: FunctionComponent<Props> = function ({
  children,
  question,
}) {
  return (
    <details>
      <summary>{question}</summary>
      {children}
    </details>
  );
};
