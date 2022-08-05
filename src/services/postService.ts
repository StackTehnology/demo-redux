import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";

export const postAPI = createApi({
  reducerPath: "postAPI",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    // https://jsonplaceholder.typicode.com
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: `/posts`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Post"],
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post: IPost) => ({
        url: `/posts`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),

    updatePost: build.mutation<IPost, IPost>({
      query: (post: IPost) => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),

    deletePost: build.mutation<IPost, IPost>({
      query: (post: IPost) => ({
        url: `/posts/${post.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useFetchAllPostsQuery, useCreatePostMutation } = postAPI;
