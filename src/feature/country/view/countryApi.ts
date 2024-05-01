import { baseApi } from "../../../core/store/api";
const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCountry: build.query<any, string | undefined>({
      query: name => `name/${name}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCountryQuery } = userApi;
