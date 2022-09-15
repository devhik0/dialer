import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Entry, EntryCollection } from "contentful";

export type EntryFields = { adsoyad: string; tel: string; slug: string; iscalled: boolean; isfav: boolean };

export type Kisi = Entry<EntryFields>;

type Response = EntryCollection<EntryFields>;

// contentful api url
const space = process.env.C_SPC_ID || "";
const acc_token = process.env.C_ACC_TKN || "";

const content_type = "kisi";
const C_BASE_URL = `https://cdn.contentful.com/spaces/${space}/environments/master/`;

export const kisilerApi = createApi({
  reducerPath: "kisilerApi",
  baseQuery: fetchBaseQuery({ baseUrl: C_BASE_URL }),
  tagTypes: ["Kisi"],
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    kisileriGetir: builder.query<Response, string>({
      query: () => `entries?access_token=${acc_token}&content_type=${content_type}&order=fields.adsoyad`,
      onQueryStarted(kisiler, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          kisilerApi.util.updateQueryData("kisileriGetir", "kisiler", (draft) => {
            Object.assign(draft, kisiler);
          })
        );
        queryFulfilled.catch(patchResult.undo);
      },

      providesTags: (result) => {
        if (result) {
          return [...result.items.map(({ sys }) => ({ type: "Kisi" as const, sys })), "Kisi"];
        } else {
          return ["Kisi"];
        }
      },
      keepUnusedDataFor: 10,
    }),
  }),
});

export const { useKisileriGetirQuery } = kisilerApi;
