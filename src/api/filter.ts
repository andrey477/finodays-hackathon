import { Strategy } from '@/types/strategy';
import { api } from '@/api/index';

export const getFilterBlocks = async (): Promise<Strategy.Response[]> => {
  try {
    const { data } = await api.get('/api/filter/blocks');
    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};
