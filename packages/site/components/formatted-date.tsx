import * as React from 'react';

type FormattedDateProps = {
  date: string;
  className?: string;
};

export const FormattedDate: React.FC<FormattedDateProps> = ({
  date,
}: FormattedDateProps) => {
  const dateObject = new Date(date);
  const dateString = Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObject);

  return <time dateTime={date}>{dateString}</time>;
};
