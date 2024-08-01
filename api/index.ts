import axios from "axios";

export async function fetchHouses(): Promise<House[]> {
  const { data } = await axios.get(
    "https://anapioficeandfire.com/api/houses"
  );
  const housesWithMembers = await Promise.all(
    data.map(async (house: House) => {
      const swornMembersDetails = await fetchSwornMembersDetails(house.swornMembers);
      return { ...house, swornMembersDetails };
    })
  );
  return housesWithMembers;
}

export async function fetchSwornMembersDetails(swornMembers: string[]): Promise<Character[]> {
  const memberDetails = await Promise.all(
    swornMembers.map((url: string) =>
      axios.get<Character>(url).then(({ data }) => data)
    )
  );
  return memberDetails;
}
