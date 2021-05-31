import useEventListener from '@use-it/event-listener';
import * as React from 'react';

const getLineHeight = () =>
  parseInt(window.getComputedStyle(document.body).lineHeight, 10);

export const useLine = () => {
  const [lineHeight, setLineHeight] = React.useState<number | undefined>();

  useEventListener('resize', () => setLineHeight(getLineHeight()));

  React.useEffect(() => {
    setLineHeight(getLineHeight());
  }, []);

  return lineHeight;
};
