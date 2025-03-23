import { StudentDataType } from '@/lib/notion/students';
import TeamProfile from './TeamProfile';
import BlockContainer from '@/components/BlockContainer';
import { v4 as uuidv4 } from 'uuid';

export type TeamDataType = {
  teamName: string;
  teamMembers: StudentDataType[];
};

export default function Section({ team }: { team: TeamDataType }) {
  return (
    <BlockContainer
      title={team.teamName + ' Team'}
      shadow
      roundedCorners={true}
      padding="less"
      gap="less"
      titleSize="sm"
    >
      <div className="-mx-2 grid grid-cols-2 gap-2 md:mx-auto md:grid-cols-4 md:gap-8 lg:grid-cols-6">
        {team.teamMembers.map(person => (
          <TeamProfile student={person} key={uuidv4()} />
        ))}
      </div>
    </BlockContainer>
  );
}
