import { Category } from "./category";
import { Product } from "./product";
import { Role } from "./role";

export type UserSchema = {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  shippingAddress: string;
  stripeAccountId: string;
  currency: string;
  roles: Role[];
  createdCategories: Category[];
  updatedCategories: Category[];
  createdProducts: Product[];
  updatedProducts: Product[];
  inventories: Inventory[];
};

export type Inventory = {
  id: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  code: string;
  owner: UserSchema;
  updatedBy: UserSchema;
  product: string;
};
