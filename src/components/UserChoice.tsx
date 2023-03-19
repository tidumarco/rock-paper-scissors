import { Choice } from "../types";
import rock from "../images/rock.jpeg";
import paper from "../images/paper.jpeg";
import scissors from "../images/scissors.jpeg";

type UserChoiceProps = {
  choice: Choice;
};

function UserChoice({ choice }: UserChoiceProps) {
  const getImage = () => {
    if (choice === Choice.Rock) {
      return rock;
    } else if (choice === Choice.Paper) {
      return paper;
    } else {
      return scissors;
    }
  };

  return (
    <div className="bg-blue-500 text-white font-bold py-4 px-4 rounded mt-4 mr-4 max-w-[64%]">
      <img src={getImage()} alt={choice} className="w-40 h-40 mb-2 md:mb-0" />
      <p className="mt-2 md:mb-0 text-center">
        You chose <strong>{choice}</strong>.
      </p>
    </div>
  );
}

export default UserChoice;
