type Title = {
  title: string;
};

const Header: React.FC<Title> = ({ title }) => {
  return (
    <header className="p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
    </header>
  );
};

export default Header;
