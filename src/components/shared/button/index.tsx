import { Button as AntdButton, ButtonProps } from 'antd';
import { FC } from 'react';
import classNames from 'classnames';

interface CustomButtonProps extends ButtonProps {
  type?: 'primary' | 'link' | 'text' | 'default' | 'dashed' | undefined;
  size?: 'small' | 'large';
}

const typeClasses: Record<string, string> = {
  primary: 'bg-primary text-white border-primary hover:bg-primary-dark',
  secondary: 'bg-secondary text-white border-secondary hover:bg-secondary-dark',
  danger: 'bg-error text-white border-error hover:bg-error-dark',
};

const sizeClasses: Record<string, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: FC<CustomButtonProps> = ({
  type = 'primary',
  size = 'large',
  children,
  className,
  ...props
}) => {
  const classes = classNames(className, typeClasses[type], sizeClasses[size]);

  return (
    <AntdButton className={classes} {...props}>
      {children}
    </AntdButton>
  );
};

export default Button;
