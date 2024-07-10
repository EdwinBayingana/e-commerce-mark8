import { Button as AntdButton, ButtonProps } from 'antd';
import { FC } from 'react';

const Button: FC<ButtonProps> = (props) => {
  const { type, children, size, className, rootClassName } = props;

  return (
    <AntdButton
      type={!type ? 'primary' : type}
      size={!size ? 'large' : size}
      className={className}
      rootClassName={rootClassName}
      {...props}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
