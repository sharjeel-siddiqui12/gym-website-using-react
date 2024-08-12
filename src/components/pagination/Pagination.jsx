function Pagination({ curPage, numPages, setCurPage }) {
  return (
    <div className="mt-20 flex justify-center gap-4">
      {Array.from({ length: numPages }).map((_, i) => (
        <button
          className={`focus flex h-12 w-12 items-center justify-center rounded-md border px-4 py-2 font-semibold ${
            curPage === i ? "border-red bg-red text-white" : "border"
          }`}
          key={i}
          onClick={() => setCurPage(i)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
