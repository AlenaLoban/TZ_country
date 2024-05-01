import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailCountryPage from "../pages/DetailCountryPage";
import style from "./index.module.scss";
function App() {
  return (
    <main className={style.container}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="countries/:name" element={<DetailCountryPage />} />
      </Routes>
    </main>
  );
}

export default App;
