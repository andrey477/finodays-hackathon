import { api } from '@/api/index';

export const getPosts = async (): Promise<any[]> => {
  try {
    const { data } = await api.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const testApi = async (): Promise<any> => {
  try {
    const { data } = await api.get('http://spigin.ru:5000/');
    return data;
  } catch (error) {
    console.error(error);
  }
};
