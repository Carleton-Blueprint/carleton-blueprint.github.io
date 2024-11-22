import BlockContainer from '@/components/BlockContainer';
import SponsorButton from './SponsorButton';
import ServerCard from './ServerCard';

export default function SponsorsBlock() {
  return (
    <BlockContainer title="Our Sponsors" padding="less" inner margin="bottom">
      <ServerCard />
      <SponsorButton />
    </BlockContainer>
  );
}
