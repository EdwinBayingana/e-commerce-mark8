import { Typography as AntdTypography } from 'antd';
import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface CustomTypographyProps {
  variant?: 'title' | 'body' | 'caption' | 'header';
  color?: 'primary' | 'secondary' | 'error' | 'default';
  className?: string;
  children?: ReactNode;
}

const variantClasses: Record<string, string> = {
  header: 'text-4xl font-extrabold',
  title: 'text-2xl font-bold',
  body: 'text-base',
  caption: 'text-sm',
};

const colorClasses: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  error: 'text-error',
  default: 'text-dark_primary',
};

const Typography: FC<CustomTypographyProps> = ({
  children,
  className,
  variant = 'body',
  color = 'default',
  ...props
}) => {
  const classes = classNames(variantClasses[variant], colorClasses[color]);

  return (
    <AntdTypography className={`${classes} ${className}`} {...props}>
      {children}
    </AntdTypography>
  );
};

export default Typography;
