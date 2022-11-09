import { Strategy } from '@/types/strategy';
import { api } from '@/api/index';

export const createNewMortgage = async (
  body: Partial<Strategy.Request>
): Promise<void> => {
  try {
    await api.post('/api/mortgage', body);
  } catch (error) {
    console.error(error);
  }
};
