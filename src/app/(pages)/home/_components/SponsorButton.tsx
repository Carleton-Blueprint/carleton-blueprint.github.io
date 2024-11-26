import LinkButton from '@/components/LinkButton';

export default function SponsorButton() {
  return (
    <LinkButton href="/contact" newTab={true} variant="icon">
      <button className="bg-blueprint hover:bg-blueprint-400 text-white py-2 px-4 rounded-full w-48">
        Become a Sponsor!
      </button>
    </LinkButton>
  );
}
