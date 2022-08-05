import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});

export const { useFetchAllUsersQuery } = userAPI;
