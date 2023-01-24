export type Decision = {
  category?: string;
  name: string;
  date?: {
    begin: string;
    end?: string;
  };
  accepted: true | false;
  body: {
    aanwezig?: string;
    juridische_grond?: string;
    context_en_argumentatie?: string;
    besluit?: string;
  };
  municipal_vote?: {
    for?: number;
    against?: number;
    neutral?: number;
  };
  public_vote?: {
    for?: number;
    against?: number;
    neutral?: number;
  };
};

export type Tax = {
  year: number;
  totalRevenue: number;
  averageRevenue: number;
};

export type Municipality = {
  title: string;
  taxData: Array<Tax>;
  decisionData: Array<Decision>;
};

export type GraphOptions = {
  x?: string;
  columns: Array<any>;
  type: 'pie' | 'line' | 'bar' | 'spline';
};
