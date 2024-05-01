import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.102/lumoscope/",
    prepareHeaders: (headers) => {
      // headers.set("Content-Type", "multipart/form-data");
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["GetLocation"],
});
export const {
  reducer: apiReducer,
  reducerPath: apiReducerPath,
  middleware: apiMiddleware,
  enhanceEndpoints,
  injectEndpoints,
  endpoints,
} = api;
