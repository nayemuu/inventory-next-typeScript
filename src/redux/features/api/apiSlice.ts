import { RootState } from "@/redux/store/store";
import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL as string,
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = (getState() as RootState)?.auth?.accessToken;

  //     if (token) {
  //       headers.set("Authorization", `Bearer ${token}`);
  //     }

  //     return headers;
  //   },
});

// Custom baseQuery wrapper (fully typed)
const customBaseQuery: BaseQueryFn<
  string | FetchArgs, // Request argument (URL string or FetchArgs object)
  unknown, // Response data (endpoint will narrow this)
  FetchBaseQueryError, // Error type returned by fetchBaseQuery
  {}, // Extra options (must match fetchBaseQuery)
  FetchBaseQueryMeta // Meta info (status, request, response)
> = async (args, api, extraOptions) => {
  // Extend logic here (token refresh, global error handling, logging, etc.)
  return baseQuery(args, api, extraOptions);
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});
