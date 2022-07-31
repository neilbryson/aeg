import type { HTMLAttributes, ReactNode } from 'react';

import { Image } from './Image';
import { Link } from './Link';

export type PreviewCardProps = {
  imgSrc: string;
  imgLargeSrc?: string;
  title: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const PreviewCard = ({ children, className, imgLargeSrc, imgSrc, title }: PreviewCardProps) => {
  return (
    <section className={`w-full md:w-96 ${className}`}>
      <Image className="mb-6" src={imgSrc} largeSrc={imgLargeSrc} isHighlighted />
      <h3 className="font-semibold text-lg mb-3 text-white">{title}</h3>
      <p className="font-light text-aeg-gray mb-6 leading-7">{children}</p>
      <Link href="#">Read more</Link>
    </section>
  );
};
