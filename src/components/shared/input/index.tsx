import { FC, useState } from 'react';
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';
import classNames from 'classnames';
import { LuEye, LuEyeOff } from 'react-icons/lu';

interface CustomInputProps extends AntdInputProps {
  type?: 'primary' | 'secondary' | 'error';
  size?: 'small' | 'large';
  inputType?: 'text' | 'search' | 'password';
  addonBefore?: React.ReactElement;
  addonAfter?: React.ReactElement;
  variant?: 'borderless' | 'outlined' | 'filled' | undefined;
  placeholder?: string;
}

const typeClasses: Record<string, string> = {
  primary: 'border-none focus:border-none focus:ring-primary text-secondary',
  secondary:
    'border-primary focus:border-secondary focus:ring-secondary text-secondary',
  error: 'border-error focus:border-error focus:ring-error',
};

const sizeClasses: Record<string, string> = {
  small: 'px-4 py-3 text-xs',
  large: 'px-6 py-3 text-lg',
};

const Input: FC<CustomInputProps> = ({
  type = 'primary',
  size = 'small',
  inputType = 'text',
  className,
  addonBefore,
  addonAfter,
  variant = 'borderless',
  placeholder,
  ...props
}) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const classes = classNames(
    'rounded-lg bg-secondaryBackground custom-input-text custom-placeholder-color',
    typeClasses[type],
    sizeClasses[size],
    className,
  );
  const prefixWithSpacing = addonBefore ? (
    <span className="mr-2.5">{addonBefore}</span>
  ) : null;

  switch (inputType) {
    case 'search':
      return (
        <AntdInput.Search
          className={classes}
          prefix={prefixWithSpacing}
          addonAfter={addonAfter}
          variant={variant}
          placeholder={placeholder}
          {...props}
        />
      );
    case 'password':
      return (
        <AntdInput.Password
          className={`${classes} custom-password-icon custom-input-pasword-text`}
          iconRender={(visible) => (visible ? <LuEye /> : <LuEyeOff />)}
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
          prefix={prefixWithSpacing}
          addonAfter={addonAfter}
          variant={variant}
          placeholder={placeholder}
          {...props}
        />
      );
    default:
      return (
        <AntdInput
          className={classes}
          prefix={prefixWithSpacing}
          addonAfter={addonAfter}
          variant={variant}
          placeholder={placeholder}
          {...props}
        />
      );
  }
};

export default Input;
