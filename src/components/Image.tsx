import { type ImgHTMLAttributes, Fragment, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export type ImageProps = {
  // Adds a border at the bottom of the image
  isHighlighted?: boolean;
  // The image to be displayed in the modal. If not supplied, the file from `src` will be used.
  largeSrc?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Image = ({ alt, className, isHighlighted = false, largeSrc, src, ...props }: ImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const modalRef = useRef<HTMLElement>(null);
  const portalRoot = document.getElementById('image-portal');

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    function closeModal(e: Event): void {
      if (!(e.target instanceof Node)) return;
      // Prevent modal from closing when clicking on the enlarged image
      if (e.target === imageRef.current) return;
      // Allow closing modal with ESC for KeyboardEvent
      if (e instanceof KeyboardEvent && e.key !== 'Escape') return;
      setIsOpen(false);
    }

    if (isOpen) {
      modal.addEventListener('click', closeModal);
      window.addEventListener('keydown', closeModal);
    }

    return () => {
      if (isOpen) {
        modal.removeEventListener('click', closeModal);
        window.removeEventListener('keydown', closeModal);
      }
    };
  }, [isOpen]);

  function onClickImage(): void {
    if (!isHighlighted) setIsOpen(true);
  }

  function renderModalContent() {
    return (
      <aside className="w-screen h-screen relative" ref={modalRef}>
        <div className="bg-translucent w-full h-full flex justify-center items-center">
          <img src={largeSrc ?? src} alt={alt} ref={imageRef} />
        </div>
        <button
          className="absolute top-0 right-0 p-4 bg-aeg-gray text-2xl hover:bg-gray-600"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
      </aside>
    );
  }

  return (
    <Fragment>
      <img
        alt={alt}
        className={`${isHighlighted ? 'border-b-aeg-red border-b-4' : 'cursor-pointer'} ${className}`}
        onClick={onClickImage}
        src={src}
        {...props}
      />
      {portalRoot && isOpen && ReactDOM.createPortal(renderModalContent(), portalRoot)}
    </Fragment>
  );
};
