import { fetchHouses } from "@/api";
import HouseDetails from "@/components/HouseDetails";

export default async function Home() {
  const houses = await fetchHouses();

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center">
          Houses of Ice and Fire
        </h1>
        <div className="space-y-8">
          {houses.map(({ url, name, swornMembersDetails }) => (
            <div
              key={url}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-4">{name}</h2>
              <HouseDetails swornMembers={swornMembersDetails} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
