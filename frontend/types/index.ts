export type Decision = {
  category?: string;
  document: string;
  total: number;
  date: string;
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
  columns: Array<[string | number, string | number]>;
  type: 'pie' | 'line' | 'bar';
};
