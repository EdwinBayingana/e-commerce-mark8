import { FC } from 'react';
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';
import classNames from 'classnames';

interface CustomInputProps extends AntdInputProps {
  type?: 'primary' | 'secondary' | 'error';
  size?: 'small' | 'large';
  inputType?: 'text' | 'search';
}

const typeClasses: Record<string, string> = {
  primary: 'border-primary focus:border-primary focus:ring-primary',
  secondary: 'border-secondary focus:border-secondary focus:ring-secondary',
  error: 'border-error focus:border-error focus:ring-error',
};

const sizeClasses: Record<string, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Input: FC<CustomInputProps> = ({
  type = 'primary',
  size = 'medium',
  inputType = 'text',
  className,
  ...props
}) => {
  const classes = classNames(
    'rounded-md',
    typeClasses[type],
    sizeClasses[size],
    className,
  );

  switch (inputType) {
    case 'search':
      return <AntdInput.Search className={classes} {...props} />;
    default:
      return <AntdInput className={classes} {...props} />;
  }
};

export default Input;
