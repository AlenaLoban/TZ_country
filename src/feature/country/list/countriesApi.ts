import {baseApi} from "../../../core/store/api"
import { countryType } from "../../../core/types/countryType";

const userApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
     getCountries: build.query<countryType[], string>({
       query: () => `all?fields=name,capital,flags,population,region`,
     }),
   }),
   overrideExisting: false,
 });
 
 export const { useGetCountriesQuery} = userApi;