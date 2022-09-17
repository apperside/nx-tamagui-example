import { AssetName, assets } from '../assets';
import React, { useMemo } from 'react';
import { ImageProps, Image } from 'tamagui';

type Props = {
  name?: AssetName;
  size?: number;
  fakeImage?: { w: number; h: number };
  source?: any;
  aspectRatio?: number;
  onPress?: () => void;
  base64EncodedImage?: { mime: string; encoded: string };
  ref?: any;
};

const AppIconComponet: React.FC<Props > = ({
  name,
  size,
  fakeImage,
  source,
  aspectRatio,
  onPress,
  base64EncodedImage,
  ref,
  ...props
}) => {
  const finalSource = useMemo(() => {
    if (fakeImage) {
      const { w, h } = fakeImage;

      if (!h) {
        console.warn('missing fake image height');
      }
      if (!w) {
        console.warn('missing fake image width');
      }

      return `https://unsplash.it/${w || 100}/${h || 100}`;
    } else if (name) {
      return assets[name];
    }

    // console.warn("the image is", base64EncodedImage)
    if (base64EncodedImage?.encoded) {
      return `data:${base64EncodedImage?.mime};base64,${base64EncodedImage?.encoded}`;
    }

    return source;
  }, [
    fakeImage,
    name,
    base64EncodedImage?.encoded,
    base64EncodedImage?.mime,
    source,
  ]);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <Image src={finalSource} alt="" {...props}>
      {props.children}
    </Image>
  );
};

export const AppIcon = React.memo(AppIconComponet);
