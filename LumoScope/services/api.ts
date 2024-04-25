import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    prepareHeaders: (header) => {
      return header;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [],
});

export const {
  reducer: apiReducer,
  reducerPath: apiReducerPath,
  middleware: apiMiddleware,
  enhanceEndpoints,
  injectEndpoints,
  endpoints,
} = api;
