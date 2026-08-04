function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div className="flex justify-center gap-4 mt-10">

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="bg-zinc-800 px-5 py-2 rounded-lg disabled:opacity-40"
      >
        Previous
      </button>

      <span className="text-lg font-semibold">
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="bg-yellow-500 text-black px-5 py-2 rounded-lg disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;