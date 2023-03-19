type Result = {
  result: string;
};

const ResultObj: React.FC<Result> = ({ result }) => {
  return (
    <div className="bg-blue-500 text-white font-bold py-4 px-4 rounded  mt-20 mr-4 min-w-[40%]">
      <div
        className="mb-2 md:mb-0 text-center"
        style={{ maxWidth: "100px", maxHeight: "100px" }}
      >
        <strong>{result}</strong>
      </div>
    </div>
  );
};

export default ResultObj;
