export declare namespace EditStrategy {
  interface Request {
    strategy: Filter[];
    mortgage: Mortgage;
  }

  interface Filter {
    name: string;
    operation: string;
    value: string;
  }

  interface Mortgage {
    id: string;
    name: string | undefined;
    maxSum: number | undefined;
    percent: number | undefined;
    years: number | undefined;
  }
}
