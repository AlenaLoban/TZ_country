import React from "react";
import Country from "../../view/Country";
import { useGetCountriesQuery } from "../countriesApi";
import style from "./countries.module.scss";

const Countries: React.FC = () => {
  const { data, isLoading, isError } = useGetCountriesQuery("");

  return (
    <div className={style.countries}>
      {isError && <h3>ServerError</h3>}
      {isLoading && <h3>Loading..</h3>}
      {data && data.map((item, index) => <Country key={index} {...item} />)}
    </div>
  );
};
export default Countries;
