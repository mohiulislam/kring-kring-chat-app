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
          `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vaGl1bGlzbGFtOTAwQGdtYWlsLmNvbSIsInN1YiI6IjY2NTE0NmNmYWIyZGE3NTQzNDQ2YjU3OSIsImlhdCI6MTcxNjYwNDAzMSwiZXhwIjo1MzE2NjA0MDMxfQ.BYHygbIZVQw6_nsJdJg19vIJbrc4Z9FO4w__awHnT30`
        );
      }
      return headers;
    },
  }),

  endpoints: () => ({}),
});

export default apiSlice;
