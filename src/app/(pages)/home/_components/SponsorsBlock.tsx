import BlockContainer from '@/components/BlockContainer';
import LinkButton from '@/components/LinkButton';
import SponsorCard from './SponsorCard';
import ServerProLogo from '../_assets/server_pro_logo.png';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export default function SponsorsBlock() {
  let sponsors = [
    {
      name: 'Server.pro',
      description:
        'Some description of the sponsor here. Some description of the sponsor here. Some description of the sponsor here. Some description of the sponsor here. Some description of the sponsor here.',
      logo: ServerProLogo,
    },
  ];

  return (
    <BlockContainer title="Our Sponsors" padding="less" inner margin="bottom">
      <div className="space-y-10 hidden md:flex flex-col">
        {sponsors.map(sponsor => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
      <div className="block md:hidden">
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          className="max-w-xs"
        >
          <CarouselContent>
            {sponsors.map(sponsor => (
              <CarouselItem key={sponsor.name} className="py-2">
                <SponsorCard sponsor={sponsor} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="w-full flex justify-end">
        <LinkButton href="/contact" newTab={true} variant="filled">
          Become a Sponsor!
        </LinkButton>
      </div>
    </BlockContainer>
  );
}
