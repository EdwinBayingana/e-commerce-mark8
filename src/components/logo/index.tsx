import { PrimaryLogo as PrimaryLogoAsset } from "@utils/images";
import routes from "@utils/routes";
import { Flex, Typography as AntdTypography } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface LogoProps {
  clickable?: boolean;
  className?: string;
  title?: string;
  caption?: string;
  isHeaderLogo?: boolean;
  justify?: string;
  gap?: number;
  imageSrc?: string;
  isProfileMenuAvatar?: boolean;
  labelClassName?: string;
  isTopStoreIcon?: boolean;
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
  title = "Mark8",
  caption = "By Awesomity Lab",
  justify = "space-between",
  gap = 10,
  imageSrc = PrimaryLogoAsset,
  isProfileMenuAvatar,
  labelClassName = "self-start text-[13px] text-secondary font-bold",
  isTopStoreIcon,
}) => {
  const router = useRouter();

  return (
    <Flex
      justify={justify}
      gap={gap}
      className="cursor-pointer"
      onClick={() => {
        clickable && router.push(routes.home.url);
      }}
    >
      <div className={`relative w-9 h-9 my-auto ${className}`}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`${isProfileMenuAvatar || isTopStoreIcon ? "object-fill rounded-xl" : "object-contain rounded-md"}  ${clickable && "cursor-pointer"}`}
        />
      </div>
      <Flex
        vertical
        wrap={false}
        align="center"
        className={`${!isHeaderLogo && "justify-center"} my-auto`}
      >
        <AntdTypography
          className={`${labelClassName} ${isHeaderLogo && "hidden md:flex"}`}
        >
          {title}
        </AntdTypography>
        {isHeaderLogo || isTopStoreIcon ? (
          <AntdTypography
            className={`${isHeaderLogo && "hidden md:flex"} self-start text-textGray text-[10px]`}
          >
            {caption}
          </AntdTypography>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};
