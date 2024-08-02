import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface HouseDetailsProps {
  swornMembers: Character[];
}

function HouseDetails({ swornMembers }: HouseDetailsProps) {
  if (!swornMembers?.length) {
    return (
      <p className="text-gray-500 dark:text-gray-400">
        This house has no sworn members
      </p>
    );
  }
  return (
    <ul className="list-disc list-inside space-y-2">
      {swornMembers.map((member) => (
        <li key={member.url} className="text-lg flex items-center space-x-2">
          <span className="font-medium">{member.name}</span>
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded text-sm font-medium ${
              member.died
                ? "bg-red-100 text-red-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {member.died ? (
              <>
                <FaTimesCircle className="mr-1" />
                <span>Died: {member.died}</span>
              </>
            ) : (
              <>
                <FaCheckCircle className="mr-1" />
                <span>Alive</span>
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default HouseDetails
