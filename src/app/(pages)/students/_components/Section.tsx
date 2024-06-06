import { StudentDataType } from "@/lib/notion/students"
import TeamProfile from "./TeamProfile"
import { v4 as uuidv4 } from "uuid"

export type TeamDataType = {
    teamName: string,
    teamMembers: StudentDataType[]
}

export default function Section({team}: {team: TeamDataType}) {
    return (
        <div className="flex flex-col space-y-6">
            <h4 className="text-2xl md:text-4xl text-white bg-blueprint  font-semibold my-4 p-3 rounded-md">{team.teamName} Team</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
                {team.teamMembers.map(person => (
                    <TeamProfile student={person} key={uuidv4()}/>
                ))}
            </div>
        </div>
    )
}