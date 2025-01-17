import { client } from '../axios';

export async function getAccountInfo() {
  const response = await client.get('user/profile');
  return response.data;
}
