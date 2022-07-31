import { HTMLAttributes } from 'react';

import Image01 from '../assets/images/component-02/Image-01.jpg';
import Image01Large from '../assets/images/component-02/Image-01@2x.jpg';
import Image02 from '../assets/images/component-02/Image-02.jpg';
import Image02Large from '../assets/images/component-02/Image-02@2x.jpg';
import Image03 from '../assets/images/component-02/Image-03.jpg';
import Image03Large from '../assets/images/component-02/Image-03@2x.jpg';
import { ImageSource } from '../components/ImageGrid';
import { PreviewCard } from '../components/PreviewCard';

type Content = {
  title: string;
  content: string;
  image: ImageSource;
};

const contents: ReadonlyArray<Content> = [
  {
    title: 'Summer Lunch Menu By Mark Best',
    content: `AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home`,
    image: [Image01, Image01Large],
  },
  {
    title: 'A Traditional Christmas Eve, Mark Best Style',
    content: `One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.`,
    image: [Image02, Image02Large],
  },
  {
    title: 'Taking Taste Further',
    content: `This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.`,
    image: [Image03, Image03Large],
  },
];

export const Latest = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={className} {...props}>
      <h1 className="text-4xl font-light mb-12 text-center text-white">ALL THE LATEST FROM AEG</h1>
      <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-4">
        {contents.map(({ title, content, image }) => (
          <PreviewCard className="mr-4 last:mr-0" key={title} imgSrc={image[0]} imgLargeSrc={image[1]} title={title}>
            {content}
          </PreviewCard>
        ))}
      </div>
    </section>
  );
};
