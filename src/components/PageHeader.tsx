interface PageHeaderProps {
    title: string;
    fullPage?: boolean;
  }
  
  const PageHeader = ({ title, fullPage = false }: PageHeaderProps) => {
    return (
      <section
        className={`relative bg-[#F2F7FD] px-4 md:px-16 overflow-hidden font-questrial ${
          fullPage ? "min-h-[80vh] flex items-center justify-center" : "py-16"
        }`}
      >
        <div className="max-w-6xl mx-auto relative flex flex-col items-center text-center gap-8 ">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#761587] z-10 pt-8">
            {title}
          </h1>
  
          {/* Background App Name */}
          <h2
            className="absolute top-1 -translate-y-1/2 font-light text-center w-full pointer-events-none"
            style={{
              fontSize: "110px",
              color: "rgba(243, 115, 53, 0.08)",
              zIndex: 20,
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Sree Vismayee Edutek
          </h2>
        </div>
      </section>
    );
  };
  
  export default PageHeader;
  