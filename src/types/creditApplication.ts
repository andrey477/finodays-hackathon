export declare namespace CreditApplication {
  interface Data {
    firstName: string;
    lastName: string;
    middleName: string;
    phoneNumber: string;
    additionalFields: AdditionalField[];
  }

  interface AdditionalField {
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
    name: string;
  }
}
