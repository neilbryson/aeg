import { Image } from './Image';

export type ImageSource = [src: string, largeSrc?: string];

export type ImageGridProps = {
  images: [ImageSource, ImageSource, ImageSource];
};

export const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-4 items-center">
      {images.map(([src, largeSrc], index) => {
        return <Image className={index === 0 ? `row-span-2` : ''} src={src} largeSrc={largeSrc} />;
      })}
    </div>
  );
};
