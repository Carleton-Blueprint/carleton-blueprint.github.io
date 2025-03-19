import WantedImage from './_assets/404_page_image.svg';
import Image from 'next/image';
import LinkButton from '@/components/LinkButton';

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-[#0A1E3A]">
      <div className="flex items-center space-x-16">
        <Image src={WantedImage} alt={'Image of a Blueprinter looking at a Wanted poster'} />
        <div>
          <p className="text-[96px] font-semibold leading-[100%] tracking-[0%] text-[#FFFFFF]">404</p>
          <p className="text-[24px] font-semibold leading-[100%] tracking-[0%] text-[#FFFFFF]">
            You found a pesky one!
          </p>
          <LinkButton href="/" newTab={false} variant="filled">
            Go back home
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
