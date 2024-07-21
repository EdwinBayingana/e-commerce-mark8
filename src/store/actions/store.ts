import { GenericResponse } from "@utils/types/global";
import { IStoreResponse } from "@utils/types/store";
import { baseAPI } from "../api";

const storeApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStores: builder.query<GenericResponse<IStoreResponse>, { params?: any }>(
      {
        query: ({ params }) => ({
          url: "store",
          method: "GET",
          params,
        }),
        providesTags: ["Products", "Stores"],
      },
    ),
  }),
});

export const { useGetStoresQuery } = storeApi;
