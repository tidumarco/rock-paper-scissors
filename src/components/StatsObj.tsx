import { useLocation, useNavigate } from "react-router-dom";
import MainButton from "./MainButton";

function StatsObj() {
  const location = useLocation();
  const stats = location.state?.stats;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center text-center items-center bg-gray-200 md:px-0">
      <h1 className="text-2xl font-bold mb-4">Stats</h1>
      <p>Wins: {stats.wins}</p>
      <p>Losses: {stats.losses}</p>
      <p>Draws: {stats.draws}</p>
      <MainButton text="Back" onClick={handleClick} />
    </div>
  );
}

export default StatsObj;
