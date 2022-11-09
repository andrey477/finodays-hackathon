export declare namespace Filter {
  interface Response {
    id: number;
    name: string;
    fields: Field[];
    status: string;
  }

  interface Field {
    field: string;
    name: string;
    input_type: string;
    type: string;
    select: string[];
    is_required: boolean;
    points: number;
  }
}
