import React from "react";
import style from "./countries.module.scss";

const DetailCountry: React.FC<any> = ({ data }) => {
  const { capital, region, name, population, flags } = data[0];

  return (
    <div className={style.detail}>
      <img src={flags.svg} alt="flag" />
      <div className={style.detail__body}>
        <p>
          {" "}
          <span>Official Name : </span> {name.official}
        </p>
        <p>
          {" "}
          <span>Common Name : </span> {name.common}
        </p>
        <p>
          <span>Population : </span> {population}
        </p>
        <p>
          <span>Capital : </span>
          {capital}
        </p>
        <p>
          <span>Region : </span> {region}
        </p>
      </div>
    </div>
  );
};
export default DetailCountry;
