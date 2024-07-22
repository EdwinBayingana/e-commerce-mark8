import { UserSchema } from "./user";

export type Role = {
  id: string;
  name: string;
  users: UserSchema[];
  createdAt: string;
  updatedAt: string;
};
