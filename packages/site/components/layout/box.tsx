import * as React from 'react';
import styles from './box.module.css';
import { PaddingToken, usePadding } from './tokens';

type BoxProps = {
  padding?: PaddingToken;
  className?: string;
};

export const Box: React.FC<BoxProps> = props => {
  return (
    <div
      className={[
        styles.box,
        ...(props.padding !== undefined ? [usePadding(props.padding)] : []),
        ...(props.className !== undefined ? [props.className] : []),
      ].join(' ')}
    >
      {props.children}
    </div>
  );
};
