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
        "Server.pro offers powerful game server hosting for serious gamers. Carleton Blueprint uses Server.pro's Virtual Private Servers for the development and testing of our projects.",
      logo: ServerProLogo,
    },
  ];

  return (
    <BlockContainer title="Our Sponsors" padding="less" inner margin="bottom">
      <div className="hidden flex-col space-y-10 md:flex">
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
      <div className="flex w-full justify-end">
        <LinkButton href="/contact" newTab={true} variant="filled">
          Become a Sponsor!
        </LinkButton>
      </div>
    </BlockContainer>
  );
}
