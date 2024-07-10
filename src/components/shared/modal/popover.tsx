import { Popover } from 'antd';
import React from 'react';

const PopoverModal = ({ content, trigger, title, ...props }: any) => {
  const { children, className, close, rootClassName, closable } = props;

  return (
    <Popover
      content={content}
      title={title}
      trigger={trigger}
      rootClassName={`rounded-lg ${rootClassName}`}
      className={`${className}`}
      closable={closable}
      color="#000000" // To make this dynamic
      onOpenChange={(isOpen: boolean) => {
        if (isOpen) {
          return;
        }

        close && close();
      }}
      {...props}
    >
      {children}
    </Popover>
  );
};

export default PopoverModal;
