import * as React from 'react';
import useEventListener from '@use-it/event-listener';
import debounce from 'lodash/debounce';
import heroImage from './hero-image.module.css';
import { CloudinaryContext } from '@/context/cloudinary-context';

type HeroImageProps = {
  url: string;
  title?: string;
};

export const HeroImage: React.FC<HeroImageProps> = props => {
  const [screenWidth, setScreenWidth] = React.useState<number | undefined>();
  const [wrapperWidth, setWrapperWidth] = React.useState<number | undefined>();
  const [imageUrl, setImageUrl] = React.useState<string | undefined>();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const cloudinaryContext = React.useContext(CloudinaryContext);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
    setWrapperWidth(wrapperRef.current?.offsetWidth ?? 0);
  };

  const onResize = React.useMemo(
    () => debounce(() => updateDimensions(), 500),
    [setScreenWidth, setWrapperWidth],
  );

  React.useEffect(() => updateDimensions(), []);

  React.useEffect(() => {
    if (
      screenWidth === undefined ||
      wrapperWidth === undefined ||
      cloudinaryContext.href === undefined
    ) {
      return;
    }

    const url = [
      cloudinaryContext.href,
      ['c_scale', 'fl_progressive', `w_${screenWidth}`].join(','),
      `${props.url}.jpg`,
    ].join('/');

    setImageUrl(url);
  }, [screenWidth, wrapperWidth, cloudinaryContext]);

  const imageStyles = React.useMemo(
    () => ({
      marginLeft: (-1 * ((screenWidth ?? 0) - (wrapperWidth ?? 0))) / 2,
    }),
    [screenWidth, wrapperWidth],
  );

  useEventListener('resize', onResize);

  return (
    <div ref={wrapperRef} className={heroImage.root}>
      {imageUrl !== undefined && <img src={imageUrl} style={imageStyles} />}
    </div>
  );
};
