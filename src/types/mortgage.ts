export declare namespace Mortgage {
  interface Data {
    result: Result[];
  }

  interface Result {
    id: number;
    name: string;
    maxSum: number;
    percent: number;
    years: number;
  }
}
