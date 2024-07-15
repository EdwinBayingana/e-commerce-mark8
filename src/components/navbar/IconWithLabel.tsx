import { Flex, Typography } from "antd";

interface IconWithLabelProps {
  label: string;
  Icon?: any;
  iconColor?: string;
  containerGap?: number;
  containerClassName: string;
  iconSize?: number;
  iconClassName: string;
  labelClassName?: string;
  isActionRequired?: boolean;
  justify?: string;
}

const IconWithLabel: React.FC<IconWithLabelProps> = ({
  Icon,
  label,
  isActionRequired,
  iconColor = "#79878F",
  containerGap = 8,
  containerClassName,
  iconSize = 13,
  iconClassName,
  labelClassName,
  justify = "space-between",
}) => {
  return (
    <Flex
      gap={containerGap}
      justify={justify}
      style={{ color: iconColor }}
      className={containerClassName}
    >
      <Icon size={iconSize} className={iconClassName} />

      {label && <Typography className={labelClassName}>{label}</Typography>}

      {isActionRequired && (
        <span className="border rounded-full w-1 h-1 border-danger bg-danger my-auto" />
      )}
    </Flex>
  );
};

export default IconWithLabel;
