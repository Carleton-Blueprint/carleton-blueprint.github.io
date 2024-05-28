import TeamProfile from "./_components/TeamProfile";
import getStudents from "@/lib/notion/students"

export default async function Students() {

  const students = await getStudents()

  const executives = students.filter((student) => (
    student.team == "executive"
  ))

  const internals = students.filter((student) => (
    student.team == "internal"
  ))

  return (
    <div>
      <div className=" min-h-screen overflow-x-hidden">
        <div className="flex flex-col w-full space-y-24 relative pb-24">
          <section className="content container">
            <div className="flex flex-col space-y-2">
              <div className="mb-8">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-center pt-6">Meet the Team</h2>
                <p className="text-lg text-center">Our community specializes in a variety of disciplines, but our passion for helping nonprofits and our interest in technology brings us together.</p>
              </div>
              <div className="flex flex-col space-y-24 text-center">
                <div className="flex flex-col space-y-6">
                  <h4 className="text-2xl md:text-4xl text-white bg-blueprint font-semibold my-4 p-3 rounded-md">Executive Team</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
                    {executives.map((person) => (
                      <TeamProfile name={person.name} team={person.team} role={person.role} imageUrl={person.imageUrl} personalUrl={person.personalUrl} key={person.name}/>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-6">
                  <h4 className="text-2xl md:text-4xl text-white bg-blueprint  font-semibold my-4 p-3 rounded-md">Tech Team</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
                    {internals.map((person) => (
                      <TeamProfile 
                        name={person.name}
                        team={person.team}
                        role={person.role}
                        imageUrl={person.imageUrl}
                        personalUrl={person.personalUrl}
                        key={person.name}
                        />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
