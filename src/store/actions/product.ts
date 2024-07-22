import { GenericResponse, Params } from "@utils/types/global";
import { IProductsResponse } from "@utils/types/product";
import { baseAPI } from "../api";

const productsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      GenericResponse<IProductsResponse>,
      { params?: Params }
    >({
      query: ({ params }) => ({
        url: "products",
        method: "GET",
        params,
      }),
      providesTags: ["Products"],
    }),

    getProduct: builder.query<
      GenericResponse<IProductsResponse>,
      { params?: Params; productId: string }
    >({
      query: ({ params, productId }) => ({
        url: `products/${productId}`,
        method: "GET",
        params,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
