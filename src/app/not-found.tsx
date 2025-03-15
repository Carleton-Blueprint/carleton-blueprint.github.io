import WantedImage from './_assets/404_page_image.svg';
import Image from 'next/image';
import LinkButton from '@/components/LinkButton';

export default function NotFound() {

  return (
    <div className="bg-[#0A1E3A]">
      <Image className="" src={WantedImage} alt={"Image of a Blueprinter looking at a Wanted poster"} />
      <p className="font-[Poppins] font-[600] text-[96px] leading-[100%] tracking-[0%] text-[#FFFFFF]">404</p>
      <p className="font-[Poppins] font-[600] text-[24px]">You found a pesky one!</p>
      <LinkButton href="/" newTab={false} variant="filled">
                Go back home
      </LinkButton>
    </div>
  );
}
