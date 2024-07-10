import { PrimaryLogo as PrimaryLogoAsset } from '@utils/images';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
  className?: string;
}

export const PrimaryLogo: FC = () => {
  const router = useRouter();

  return (
    <div className="relative w-10 h-10">
      <Image
        src={PrimaryLogoAsset}
        alt="Mark8 company logo"
        fill
        onClick={() => router.push('/')}
        className="object-contain rounded-md cursor-pointer"
      />
    </div>
  );
};
