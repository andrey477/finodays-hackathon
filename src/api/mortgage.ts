import { Strategy } from '@/types/strategy';
import { api } from '@/api/index';
import { Mortgage } from '@/types/mortgage';

export const createNewMortgage = async (
  body: Partial<Strategy.Request>
): Promise<void> => {
  try {
    await api.post('/api/mortgage', body);
  } catch (error) {
    console.error(error);
  }
};

export const getAllMortgages = async (): Promise<Mortgage.Data[]> => {
  try {
    const { data } = await api.get('/api/mortgages');
    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};
