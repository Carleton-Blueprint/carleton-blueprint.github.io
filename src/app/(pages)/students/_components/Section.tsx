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
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
        {team.teamMembers.map(member => (
          <TeamProfile student={member} key={uuidv4()} />
        ))}
      </div>
    </BlockContainer>
  );
}
