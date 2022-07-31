import { HTMLAttributes, ReactNode } from 'react';

export type HeadingTextProps = {
  title: string;
  children: ReactNode;
  isSubText?: boolean;
} & HTMLAttributes<HTMLElement>;

export const HeadingText = ({ className, title, children, isSubText = false }: HeadingTextProps) => {
  return (
    <section className={className}>
      <h1 className={`${isSubText ? 'font-medium text-sm text-aeg-red' : 'text-2xl'} mb-4`}>{title}</h1>
      {!isSubText && <div className="w-full h-[2px] bg-aeg-gray mb-4" />}
      <p className={`${isSubText ? 'font-bold' : 'font-light'}`}>{children}</p>
    </section>
  );
};
