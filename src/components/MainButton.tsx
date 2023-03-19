interface Button {
  text: string;
  onClick: () => void;
}

const MainButton: React.FC<Button> = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
