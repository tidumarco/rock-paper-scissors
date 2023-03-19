import Header from "../components/Header";
import App from "../App";
import { Route, Routes } from "react-router-dom";
import StatsObj from "../components/StatsObj";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 ">
      <Header title="Rock Paper Scissors" />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/stats" element={<StatsObj />} />
      </Routes>
    </div>
  );
}
