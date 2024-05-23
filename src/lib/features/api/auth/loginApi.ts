import { Login, LoginResponse } from "@/interfaces/interfaces";
import apiSlice from "../apiSlice";

export const loginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Login>({
      query: (body) => ({
        url: "/auth",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
