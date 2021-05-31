import * as React from 'react';
import baseline from './baseline.module.css';

type BaselineProps = {
  lineHeight: number;
  offset?: number;
  opacity?: number;
  showInitially?: boolean;
};

export const Baseline: React.FC<BaselineProps> = props => {
  const { lineHeight, offset = 0, opacity = 1, showInitially = false } = props;
  const [displayBaseline, setDisplayBaseline] = React.useState(showInitially);

  const fraction = 100 / lineHeight;
  const styles: React.CSSProperties = {
    backgroundSize: `${lineHeight}px ${lineHeight}px`,
    backgroundImage: `linear-gradient(
      transparent 0%,
      transparent ${(lineHeight / 2 - 1) * fraction}%,
      var(--grid-subsection-color) ${(lineHeight / 2 - 1) * fraction}%,
      var(--grid-subsection-color) ${(lineHeight / 2) * fraction}%,
      transparent ${(lineHeight / 2) * fraction}%,
      transparent ${(lineHeight - 1) * fraction}%,
      var(--grid-section-color) ${(lineHeight - 1) * fraction}%,
      var(--grid-section-color) 100%
    )`,
    opacity,
    backgroundPositionY: offset,
  };
  const toggleBaseline = React.useCallback(
    () => setDisplayBaseline(!displayBaseline),
    [displayBaseline],
  );

  return (
    <div className={baseline.baselineWrapper}>
      {props.children}
      {displayBaseline && <div className={baseline.grid} style={styles}></div>}
      <button onClick={toggleBaseline} className={baseline.baselineToggle}>
        {displayBaseline ? 'Hide Grid' : 'Show Grid'}
      </button>
    </div>
  );
};
