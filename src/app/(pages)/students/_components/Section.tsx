import { StudentDataType } from "@/lib/notion/students"
import TeamProfile from "./TeamProfile"
import BlockContainer from "../../home/_components/BlockContainer"
import { v4 as uuidv4 } from "uuid"

export type TeamDataType = {
    teamName: string,
    teamMembers: StudentDataType[]
}

export default function Section({team}: {team: TeamDataType}) {
    return (
        <BlockContainer title={team.teamName + " Team -"} roundedCorners={true} flip shadow={true}>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
                {team.teamMembers.map(person => (
                    <TeamProfile student={person} key={uuidv4()}/>
                ))}
            </div>
        </BlockContainer>
    )
}