import React from "react";
import Countries from "../feature/country/list/components/Countries";

const MainPage: React.FC = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
        All contries
      </h1>
      <Countries />
    </>
  );
};
export default MainPage;
