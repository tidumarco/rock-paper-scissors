import { useState } from "react";
import "./App.css";
import rock from "./images/rock.jpeg";
import paper from "./images/paper.jpeg";
import scissors from "./images/scissors.jpeg";
import MainButton from "./components/MainButton";
import WeaponButton from "./components/WeaponButton";
import UserChoice from "./components/UserChoice";
import ComputerChoice from "./components/ComputerChoice";
import ResultObj from "./components/Result";
import { Choice, Result, Stats } from "./types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [userChoice, setUserChoice] = useState<Choice>();
  const [computerChoice, setComputerChoice] = useState<Choice>();
  const [result, setResult] = useState<Result>();
  const [stats, setStats] = useState<Stats>({ wins: 0, losses: 0, draws: 0 });

  const navigate = useNavigate();
  const handleChoice = (choice: Choice) => {
    const choices = [Choice.Rock, Choice.Paper, Choice.Scissors];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    setUserChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult(Result.Draw);
      setStats((prevStats) => ({ ...prevStats, draws: prevStats.draws + 1 }));
    } else if (
      (choice === Choice.Rock && computerChoice === Choice.Scissors) ||
      (choice === Choice.Paper && computerChoice === Choice.Rock) ||
      (choice === Choice.Scissors && computerChoice === Choice.Paper)
    ) {
      setResult(Result.Win);
      setStats((prevStats) => ({ ...prevStats, wins: prevStats.wins + 1 }));
    } else {
      setResult(Result.Lose);
      setStats((prevStats) => ({ ...prevStats, losses: prevStats.losses + 1 }));
    }
  };

  const resetGame = () => {
    setUserChoice(undefined);
    setComputerChoice(undefined);
    setResult(undefined);
    setStats({ wins: 0, losses: 0, draws: 0 });
    toast.info("Game Reset!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleStatsClick = () => {
    navigate("/stats", { state: { stats } });
  };
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 md:px-0 ">
      <ToastContainer />
      <div className="flex flex-row mb-4">
        <button
          onClick={handleStatsClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded mb-4"
        >
          Show Stats
        </button>
        <MainButton text="Reset game" onClick={resetGame} />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Choose your weapon:</h1>
        </div>
        <div className="grid grid-cols-[300px_300px_300px] w-full md:w-auto md:max-w-[80%]">
          <div className="flex flex-col items-center">
            <WeaponButton
              text="Rock"
              onClick={() => handleChoice(Choice.Rock)}
              img={rock}
            />
          </div>
          <div className="flex flex-col items-center">
            <WeaponButton
              text="Paper"
              onClick={() => handleChoice(Choice.Paper)}
              img={paper}
            />
          </div>
          <div className="flex flex-col items-center">
            <WeaponButton
              text="Scissors"
              onClick={() => handleChoice(Choice.Scissors)}
              img={scissors}
            />
          </div>
          {userChoice && (
            <div className="flex flex-col items-center">
              <UserChoice choice={userChoice} />
            </div>
          )}
          <div className="flex flex-col items-center">
            {result && <ResultObj result={result} />}
          </div>
          {computerChoice && (
            <div className="flex flex-col items-center">
              <ComputerChoice choice={computerChoice} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
