import { fetchHouses } from "@/api";

export default async function Home() {
  const houses = await fetchHouses();

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center">
          Houses of Ice and Fire
        </h1>
        <div className="space-y-8">
          {houses.map((house) => (
            <div
              key={house.url}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-4">{house.name}</h2>
              {house.swornMembersDetails.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">
                  This house has no sworn members
                </p>
              ) : (
                <ul className="list-disc list-inside space-y-2">
                  {house.swornMembersDetails.map((member) => (
                    <li key={member.url} className="text-lg">
                      <span className="font-medium">{member.name}</span> -{" "}
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {member.died ? `Died: ${member.died}` : "Alive"}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
