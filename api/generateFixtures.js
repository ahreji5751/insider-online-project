import axios from 'axios';

const generateFixtures = async () => {
  const { data: { data } } = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/matches/populate`);
  return data;
}

export default generateFixtures;