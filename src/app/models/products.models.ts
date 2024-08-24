
export interface Product {
  on_sale?:           OnSale;
  _id:                string;
  active:             boolean;
  name:               string;
  description?:       string;
  price:              number;
  categories:         string[];
  available_quantity: number;
  has_variants:       boolean;
  variants:           Variant[];
  images:             string[];
  createdAt:          string;
  updatedAt:          string;
  slug:               string;
  __v:                number;
}

export interface OnSale {
  is_on_sale: boolean;
  sale_price: number;
}

export interface Variant {
  group_name: string;
  options:    Option[];
  _id:        string;
}

export interface Option {
  name:     string;
  quantity: number;
  _id:      string;
}
