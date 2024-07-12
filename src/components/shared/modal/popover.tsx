import { Popover, PopoverProps } from 'antd';
import React, { ReactNode } from 'react';

interface PopoverModalProps extends PopoverProps {
  content: ReactNode;
  trigger: PopoverProps['trigger'];
  title: ReactNode;
  children: ReactNode;
  className?: string;
  rootClassName?: string;
  close?: () => void;
}

const PopoverModal: React.FC<PopoverModalProps> = ({
  content,
  trigger,
  title,
  children,
  className = '',
  close,
  rootClassName = '',
  ...props
}) => {
  return (
    <Popover
      content={content}
      title={title}
      trigger={trigger}
      rootClassName={`rounded-lg ${rootClassName}`}
      className={`${className}`}
      color="#FFFFFF"
      onOpenChange={(isOpen: boolean) => {
        if (!isOpen && close) {
          close();
        }
      }}
      {...props}
    >
      {children}
    </Popover>
  );
};

export default PopoverModal;
