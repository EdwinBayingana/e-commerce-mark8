import React, { FC } from 'react';
import { PiX } from 'react-icons/pi';
import Typography from '../typography';

interface Props {
  variant: 'half' | 'full';
  children: React.ReactNode;
  title?: string;
  onCancel: () => void;
  className?: string;
}

const PopupModal: FC<Props> = ({ title, onCancel, className, ...props }) => {
  const { children, variant } = props;

  switch (variant) {
    case 'half':
      return (
        <div className={className} {...props}>
          <div className="rounded-xl">
            <div className="flex w-full justify-between">
              <Typography variant="title">{title}</Typography>
              <button onClick={onCancel}>
                <PiX className="text-text_gray_light my-auto" size={20} />
              </button>
            </div>
          </div>

          <div className="overflow-y-auto scrollbar-hide">{children}</div>
        </div>
      );

    case 'full':
      return <div {...props}>{children}</div>;

    default:
      return null;
  }
};

export default PopupModal;
