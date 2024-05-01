import React from "react";
import { useParams } from "react-router-dom";
import { useGetCountryQuery } from "../feature/country/view/countryApi";
import DetailCountry from "../feature/country/list/components/DetailCountry";
import { useNavigate } from "react-router-dom";
import style from "../core/index.module.scss";
import { IoIosArrowRoundBack } from "react-icons/io";

const DetailCountryPage: React.FC = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const {
    data = [],
    isLoading,
    isError,
    isSuccess,
  } = useGetCountryQuery(name, {
    skip: !name,
  });
  return (
    <div className={style.detailPage}>
      <button onClick={() => navigate(-1)}>
        {" "}
        <IoIosArrowRoundBack className={style.detailPage__icon} />
        Back
      </button>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Server Error</h3>}
      {isSuccess && <DetailCountry data={data} />}
    </div>
  );
};
export default DetailCountryPage;
