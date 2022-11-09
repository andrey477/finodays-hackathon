import { api } from '@/api/index';

export const getPosts = async (): Promise<any[]> => {
  try {
    const { data } = await api.get('/posts');
    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};
