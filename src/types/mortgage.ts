export declare namespace Mortgage {
  interface Data {
    result: Result[];
  }

  interface Result {
    id: number;
    name: string;
    max_sum: number;
    percent: number;
    years: number;
  }
}
