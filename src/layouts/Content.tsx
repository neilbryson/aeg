import Image01 from '../assets/images/component-01/Image-01.jpg';
import Image01Large from '../assets/images/component-01/Image-01@2x.jpg';
import Image02 from '../assets/images/component-01/Image-02.jpg';
import Image02Large from '../assets/images/component-01/Image-02@2x.jpg';
import Image03 from '../assets/images/component-01/Image-03.jpg';
import Image03Large from '../assets/images/component-01/Image-03@2x.jpg';
import { HeadingText } from '../components/HeadingText';
import { ImageGrid, ImageGridProps } from '../components/ImageGrid';

export const Content = () => {
  const images: ImageGridProps['images'] = [
    [Image01, Image01Large],
    [Image02, Image02Large],
    [Image03, Image03Large],
  ];

  return (
    <section className="flex flex-col md:flex-row">
      <ImageGrid images={images} />
      <div className="w-full mt-8 md:mt-0 md:w-1/3 md:ml-8">
        <HeadingText className="mb-8" title="ANSWER YOUR BODY'S NEEDS">
          The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body
          naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial
          flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being
          mindful as you appetite guides you to consume according to your body's needs
        </HeadingText>
        <HeadingText title="BE MINDFUL" isSubText>
          Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.
        </HeadingText>
      </div>
    </section>
  );
};
