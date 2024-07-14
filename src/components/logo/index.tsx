import Typography from "@components/shared/typography";
import { PrimaryLogo as PrimaryLogoAsset } from "@utils/images";
import routes from "@utils/routes";
import { Flex, Typography as AntdTypography } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface LogoProps {
  clickable?: boolean;
  className?: string;
  isHeaderLogo?: boolean;
}

export const PrimaryLogo: FC<LogoProps> = ({ clickable, className }) => {
  const router = useRouter();

  return (
    <div className={`relative w-10 h-10 ${className}`}>
      <Image
        src={PrimaryLogoAsset}
        alt="Mark8 company logo"
        fill
        onClick={() => {
          clickable && router.push(routes.home.url);
        }}
        className={`object-contain rounded-md ${clickable && "cursor-pointer"}`}
      />
    </div>
  );
};

export const PrimaryLogoWithLabel: FC<LogoProps> = ({
  clickable,
  className,
  isHeaderLogo,
}) => {
  const router = useRouter();

  return (
    <Flex
      justify="space-between"
      gap={10}
      className="cursor-pointer"
      onClick={() => {
        clickable && router.push(routes.home.url);
      }}
    >
      <div className={`relative w-9 h-9 my-auto ${className}`}>
        <Image
          src={PrimaryLogoAsset}
          alt="Mark8 company logo"
          fill
          className={`object-contain rounded-md ${clickable && "cursor-pointer"}`}
        />
      </div>
      <Flex
        vertical
        wrap={false}
        align="center"
        className={`${!isHeaderLogo && "justify-center"} my-auto`}
      >
        <AntdTypography className="self-start text-[13px] text-secondary font-bold">
          Mark8
        </AntdTypography>
        {isHeaderLogo && (
          <AntdTypography className="self-start text-textGray text-[10px]">
            By Awesomity Lab
          </AntdTypography>
        )}
      </Flex>
    </Flex>
  );
};
