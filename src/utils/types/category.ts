import { UserSchema } from "./user";

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  createdBy: UserSchema;
  updatedBy: UserSchema;
  products: string[];
};

export type ICategoryResponse = {
  categories: Category[];
};
