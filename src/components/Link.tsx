import { AnchorHTMLAttributes } from 'react';

export const Link = ({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <a className={`uppercase border-b border-b-aeg-red font-bold ${className}`} {...props} />;
};
