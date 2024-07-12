import { Button as AntdButton } from 'antd';
import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface CustomButtonProps {
  type?:
    | 'primary'
    | 'secondary'
    | 'link'
    | 'text'
    | 'default'
    | 'dashed'
    | undefined;
  size?: 'small' | 'large';
  children?: ReactNode;
  className?: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const typeClasses: Record<string, string> = {
  primary: 'bg-primary text-secondary border-primary text-xs',
  secondary:
    'bg-primaryBackground text-secondary border-[1.5px] border-borderColor text-xs',
  danger: 'bg-error border-error hover:bg-error-dark text-xs',
};

const sizeClasses: Record<string, string> = {
  small: 'px-3 py-1',
  large: 'px-7 py-5',
};

const Button: FC<CustomButtonProps> = ({
  type = 'primary',
  size = 'large',
  children,
  className,
  htmlType,
  onClick,
  ...props
}) => {
  const classes = classNames(className, typeClasses[type], sizeClasses[size]);

  return (
    <AntdButton
      className={`${classes} rounded-lg font-semibold`}
      htmlType={htmlType}
      onClick={onClick}
      {...props}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
