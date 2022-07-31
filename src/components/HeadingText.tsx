import { ReactNode } from 'react';

export type HeadingTextProps = {
  title: string;
  children: ReactNode;
  isSubText?: boolean;
};

export const HeadingText = ({ title, children, isSubText = false }: HeadingTextProps) => {
  return (
    <section>
      <h1 className={`${isSubText ? 'font-medium text-sm text-aeg-red' : 'text-2xl'} mb-2`}>{title}</h1>
      {!isSubText && <div className="w-full h-[2px] bg-aeg-gray mb-4" />}
      <p className={`${isSubText ? 'font-bold' : 'font-light'}`}>{children}</p>
    </section>
  );
};
