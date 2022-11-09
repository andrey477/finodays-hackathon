export declare namespace Strategy {
  interface Filter {
    name: string;
    operation: string;
    value: string;
  }

  interface Mortgage {
    name: string | undefined;
    maxSum: number | undefined;
    percent: number | undefined;
    years: number | undefined;
  }
}
