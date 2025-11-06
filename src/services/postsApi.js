import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// using RTK Query to create an API service for posts
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'posts',
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;