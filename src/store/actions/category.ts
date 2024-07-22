import { ICategoryResponse } from "@utils/types/category";
import { GenericResponse } from "@utils/types/global";
import { baseAPI } from "../api";

const categoryApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<
      GenericResponse<ICategoryResponse>,
      { params?: any }
    >({
      query: ({ params }) => ({
        url: "categories",
        method: "GET",
        params,
      }),
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
