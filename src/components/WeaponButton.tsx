interface Button {
  text: string;
  onClick: () => void;
  img: string;
}

const WeaponButton: React.FC<Button> = ({ text, onClick, img }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mr-4"
      onClick={onClick}
    >
      <img src={img} alt="rock" className="w-40 h-40 mb-2 md:mb-0" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      <div className="mt-2 md:mb-0">{text}</div>
    </button>
  );
};

export default WeaponButton;
