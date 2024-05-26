import { LoginResponse, Register } from "@/interfaces/interfaces";
import apiSlice from "../apiSlice";

export const registerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<LoginResponse, Register>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
