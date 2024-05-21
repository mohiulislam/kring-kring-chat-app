import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: (headers) => {
      const JwtToken = localStorage.getItem("JwtToken");

      if ("JwtToken") {
        console.log(11111);
        
        headers.set(
          "authorization",
          `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vaGl1bGlzbGFtNUBnbWFpbC5jb20iLCJzdWIiOiI2NjQ0MmM5MmM1MDA5NWFhMWE3ZjdiMmMiLCJpYXQiOjE3MTYwMTQxNzIsImV4cCI6MTc3NjAxNDE3Mn0.VDON1pGXRGibvRZ8-Bx2FJEF9r7uChvE3oqxXGeQIkk`
        );
      }
      return headers;
    },
  }),

  endpoints: () => ({}),
});

export default apiSlice;
