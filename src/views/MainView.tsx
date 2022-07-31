import { Content } from '../layouts/Content';
import { Latest } from '../layouts/Latest';

export const MainView = () => {
  return (
    <main className="w-screen h-screen bg-aeg-black text-aeg-gray flex justify-center overflow-auto">
      <div className="flex flex-col w-full h-full pl-12 pr-12 max-w-3xl md:pl-0 md:pr-0 md:max-w-6xl mt-24 pb-24">
        <Content />
        <Latest className="mt-32" />
      </div>
    </main>
  );
};
