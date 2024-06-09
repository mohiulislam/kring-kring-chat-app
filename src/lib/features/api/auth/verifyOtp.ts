import {
    VerifyEmail,
    VerifyEmailRsponse
} from "@/interfaces/interfaces";
import apiSlice from "../apiSlice";

export const verifyEmailApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyEmail: builder.mutation<VerifyEmailRsponse, VerifyEmail>({
      query: (body) => ({
        url: "/auth/verify",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useVerifyEmailMutation } = verifyEmailApi;
