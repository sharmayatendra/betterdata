const Shimmer = () => {
  return (
    <div className="shadow-sm rounded-md border border-gray-300 p-4 min-w-[10rem] max-w-[15rem] h-60 flex flex-col gap-4 animate-pulse">
      <div className="w-24 m-auto">
        <div className="w-24 h-24 bg-gray-300" />
      </div>
      <div className="bg-gray-300 h-4 w-full" />
      <div className="bg-gray-300 h-4 w-full" />
      <div className="bg-gray-300 h-4 w-full" />
    </div>
  );
};

export default Shimmer;
