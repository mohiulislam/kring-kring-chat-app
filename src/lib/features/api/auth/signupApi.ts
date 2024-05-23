import {  LoginResponse, Signup } from "@/interfaces/interfaces";
import apiSlice from "../apiSlice";

export const signupApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<LoginResponse, Signup>({
      query: (body) => ({
        url: "/auth",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useSignupMutation } = signupApi;