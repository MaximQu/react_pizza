export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

export type Pizza = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  types: number[];
  sizes: number[];
  count: number;
};

export type SearchPizzaParams = {
  sortBy: string;
  orderBy: string;
  category: string;
  search: string;
  currentPage: string;
};
