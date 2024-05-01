import React from "react";
import { Link } from "react-router-dom";
import { countryType } from "../../../core/types/countryType";
import style from "./country.module.scss";

const Country: React.FC<countryType> = ({ name, flags }) => {
  return (
    <div className={style.card}>
      <Link to={`/countries/${name.official}`}>
        <h3>{name.official}</h3>
      </Link>
      <img src={flags.svg} alt="flag" />
    </div>
  );
};
export default Country;
