import axios from 'axios';

const getTeams = async () => {
  const { data: { data } } = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/teams`);
  return data;
}

export default getTeams;