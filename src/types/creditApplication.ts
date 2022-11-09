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
    name: string;
    maxSum: number;
    percent: number;
    years: number;
    strategy: StrategyFields[];
  }

  interface StrategyFields {
    name: string;
  }
}
