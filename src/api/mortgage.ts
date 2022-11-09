import { Strategy } from '@/types/strategy';
import { api } from '@/api/index';
import { Mortgage } from '@/types/mortgage';
import { CreditApplication } from '@/types/creditApplication';

export const createNewMortgage = async (
  body: Partial<Strategy.Request>
): Promise<void> => {
  try {
    await api.post('/api/mortgage', body);
  } catch (error) {
    console.error(error);
  }
};

export const getAllMortgages = async (): Promise<Mortgage.Data | null> => {
  try {
    const { data } = await api.get('/api/blocks');
    return data;
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const getMortgage = async (
  id: string
): Promise<CreditApplication.Mortgage | null> => {
  try {
    const { data } = await api.post('/api/blocks', { id });
    return data;
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const testApi = async () => {
  try {
    await api.get('/api/blocks');
  } catch (error) {
    console.log(error);
  }
};
