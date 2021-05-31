import * as React from 'react';

import { debounce } from 'lodash';
import useEventListener from '@use-it/event-listener';

import { useLine } from '@/hooks/use-line';

import picture from './picture.module.css';

type PictureProps = {
  assetId: string;
  alt: string;
};

type PictureSize = 320 | 480 | 768 | 1024;
const pictureSizes: PictureSize[] = [320, 480, 768, 1024];

function getLockedImageSize(availableWidth: number) {
  const sizes = [0, ...pictureSizes];
  let currentWidth = sizes[0];

  while (currentWidth <= availableWidth && sizes.includes(currentWidth)) {
    currentWidth = sizes[sizes.indexOf(currentWidth) + 1];
  }

  return currentWidth;
}

export const Picture: React.FC<PictureProps> = props => {
  const line = useLine();

  const imageWrapperRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);

  const [assetSize, setAssetSize] = React.useState<number | undefined>();
  const [imageUrl, setImageUrl] = React.useState<string | undefined>();
  const [originalUrl, setOriginalUrl] = React.useState<string | undefined>();
  const [imageHeight, setImageHeight] = React.useState<number | undefined>();
  const [imageStyles, setImageStyles] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    setAssetSize(getLockedImageSize(imageWrapperRef.current?.offsetWidth ?? 0));
    setOriginalUrl(`FIXME/${props.assetId}.jpg`);
  }, []);

  useEventListener(
    'load',
    (event: Event) => {
      setImageHeight((event.target as HTMLImageElement).offsetHeight);
    },
    imageRef.current,
  );

  useEventListener(
    'resize',
    debounce(() => {
      setImageHeight(imageRef.current?.offsetHeight ?? 0);
      setAssetSize(
        Math.max(
          getLockedImageSize(imageWrapperRef.current?.offsetWidth ?? 0),
          assetSize ?? 0,
        ),
      );
    }, 500),
  );

  React.useEffect(() => {
    if (assetSize === undefined) {
      return;
    }

    setImageUrl(
      [
        'FIXME',
        ['fl_progressive', 'c_scale', `w_${assetSize}`].join(','),
        `${props.assetId}.jpg`,
      ].join('/'),
    );
  }, [assetSize]);

  React.useEffect(() => {
    if (line === undefined || imageHeight === undefined) {
      return;
    }

    setImageStyles({ marginBottom: line - (imageHeight % line) });
  }, [line, imageHeight]);

  return (
    <figure className={picture.figure}>
      <div
        className={[picture.imageContainer, 'image-wrapper'].join(' ')}
        ref={imageWrapperRef}
        title={`Open ${props.assetId}.jpg`}
      >
        <a href={originalUrl}>
          <img
            src={imageUrl}
            alt={props.alt}
            ref={imageRef}
            loading={'lazy'}
            style={imageStyles}
          />
        </a>
      </div>
      <figcaption>{props.alt}</figcaption>
    </figure>
  );
};
