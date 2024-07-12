import { PrimaryLogo as PrimaryLogoAsset } from "@utils/images";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface LogoProps {
  clickable?: boolean;
  className?: string;
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
          clickable && router.push("/");
        }}
        className={`object-contain rounded-md ${clickable && "cursor-pointer"}`}
      />
    </div>
  );
};
