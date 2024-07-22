import { Category } from "./category";
import { Review } from "./global";
import { Inventory } from "./user";

export type Product = {
  id: string;
  code: string;
  name: string;
  description: string;
  category: Category;
  unitPrice: number;
  thumbnail: string[];
  createdAt: string;
  updatedAt: string;
  store: {
    createdCategories: Category[];
    updatedCategories: Category[];
  };
  inventories: Inventory[];
  reviews: Review[];
};

export type IProductsResponse = {
  thumbnail: string[];
  category: Category;
  unitPrice: number;
  name: string;
  description: string;
  id: string;
  products: Product[];
};
