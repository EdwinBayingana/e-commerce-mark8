export type IPagination = {
  current: number;
  limit: number;
  total: number;
  page?: number;
  next?: { page: number; limit: number; total: number; current: number };
};

export type GenericResponse<T> = {
  [x: string]: any;
  statusCode: number;
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
