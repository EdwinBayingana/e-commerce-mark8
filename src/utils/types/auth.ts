import { GenericResponse } from "./global";

export type AuthResponse = GenericResponse<{
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}>;

export type LoginPayload = {
  username: string;
  password: string;
};

export type SignupPayload = {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName: string;
  lastName: boolean;
  phoneNumber: number | string;
};
