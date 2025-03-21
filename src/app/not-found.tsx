import WantedImage from './_assets/404_page_image.svg';
import Image from 'next/image';
import LinkButton from '@/components/LinkButton';

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-[#0A1E3A]">
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-16">
        <Image src={WantedImage} alt={'Image of a Blueprinter looking at a Wanted poster'} />
        <div className="flex flex-col items-center space-y-4 text-center md:items-start md:space-y-2 md:text-left">
          <p className="text-[96px] font-semibold leading-[100%] tracking-[0%] text-[#FFFFFF]">404</p>
          <p className="text-[24px] font-semibold leading-[100%] tracking-[0%] text-[#FFFFFF]">
            You found a pesky one!
          </p>
          <LinkButton href="/">Go back home</LinkButton>
        </div>
      </div>
    </div>
  );
}
