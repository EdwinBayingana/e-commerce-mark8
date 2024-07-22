import { Product } from "./product";
import { UserSchema } from "./user";

export type IPagination = {
  current: number;
  limit: number;
  total: number;
  page?: number;
  next?: { page: number; limit: number; total: number; current: number };
};

export type GenericResponse<T> = {
  [x: string]: any;
  status: number;
  message: string;
  data: T;
  error?: {
    data: {
      message: string;
    };
  };
};

export enum IMinuteTypeEnum {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}

export type Review = {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  ratedBy: UserSchema;
  updatedBy: UserSchema;
  product: string;
};

export type Pagination = {
  totalPages: number;
  recordsPerPage: number;
  totalRecords: number;
  currentPage: number;
};

export type ApiResponse = {
  status: number;
  message: string;
  data: {
    products: Product[];
    pagination: Pagination;
  };
};

export interface Params {
  name?: string;
  address?: string;
  description?: string;
  pageNumber?: number;
  recordsPerPage?: number;
  sortBy?: string;
  sortOrder?: string;
  createdFromDate?: string;
  createdToDate?: string;
  numberOfProducts?: string;
}
