export declare namespace CreditApplication {
  interface Data {
    blockId: string;
    firstName: string;
    lastName: string;
    middleName: string;
    phoneNumber: string;
    additionalFields: AdditionalField[];
  }

  interface AdditionalField {
    id: string;
    field: string;
    value: string;
  }

  interface Mortgage {
    result: Result;
  }

  interface Result {
    name: string;
    max_sum: number;
    percent: number;
    years: number;
    filters: StrategyFields[];
  }

  interface StrategyFields {
    id: string;
    name: string;
  }

  interface Response {
    result: boolean;
  }

  namespace All {
    interface Data {
      result: Result[];
      status: string;
    }

    interface Result {
      id: number;
      accepted: boolean;
      middle_name: string;
      name: string;
      surname: string;
      phone: string;
      result: string;
    }
  }
}
