import { Filter } from '@/types/filter';
import { api } from '@/api/index';

export const getFilterBlocks = async (): Promise<Filter.Response[]> => {
  try {
    const { data } = await api.get('/api/filter/blocks');
    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};
