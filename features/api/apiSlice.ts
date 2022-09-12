import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { C } from "../../types/types";

// todo: buraya contentful cms i kur

// contentful api url
const C_BASE_URL = "https://cdn.contentful.com/";
const space = process.env.C_SPC_ID;
const acc_token = process.env.C_ACC_TKN || "";

export const kisilerApi = createApi({
  reducerPath: "kisilerApi",
  baseQuery: fetchBaseQuery({ baseUrl: C_BASE_URL }),
  endpoints: (builder) => ({
    kisileriGetir: builder.query<C, string>({
      query: () => `spaces/${space}/environments/master/entries?access_token=${acc_token}`,
    }),
  }),
});

export const { useKisileriGetirQuery } = kisilerApi;
