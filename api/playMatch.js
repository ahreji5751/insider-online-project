import axios from 'axios';

const playMatch = async (week = null) => {
  if (week) {
    const { data: { data } } = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/matches/play/week/${week}`);
    return data;
  }
  const { data: { data } } = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/matches/play/all`);
  return data;
}

export default playMatch;