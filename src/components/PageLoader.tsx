const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-[9999]">
      <img
        src="https://vismayee.com/wp-content/uploads/2023/11/Pre-Load@2x.png"
        alt="Loading..."
        className="w-34 h-32 animate-spin-slow" // Bigger size
      />
    </div>
  );
};

export default PageLoader;
