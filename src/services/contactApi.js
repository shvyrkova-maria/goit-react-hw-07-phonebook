import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://611634c28f38520017a3876c.mockapi.io',
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactApi;

// async function onCacheEntryAdded(
//   arg: QueryArg,
//   {
//     dispatch,
//     getState,
//     extra,
//     requestId,
//     cacheEntryRemoved,
//     cacheDataLoaded,
//     getCacheEntry,
//   }: MutationCacheLifecycleApi
// ): Promise<void>

// state.some(({ name }) => name === payload.name)
//   ? alert(`Contact ${payload.name} already exists`)
//   : [payload, ...state],
