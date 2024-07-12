import { PrimaryLogo } from "@components/logo";
import { RotatingLines } from "react-loader-spinner";

interface Props {
  isIcon?: boolean;
  width?: string;
  className?: string;
}

const PageLoader = ({ isIcon, width, className }: Props) => {
  return (
    <div
      className={`flex w-full mt-10 justify-center items-center ${className}`}
    >
      {isIcon ? (
        <PrimaryLogo />
      ) : (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="4"
          animationDuration="0.75"
          width={width}
          visible={true}
        />
      )}
    </div>
  );
};

export default PageLoader;
