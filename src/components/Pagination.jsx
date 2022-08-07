function Pagination({ page, setPage }) {
  return (
    <header className="flex justify-between items-center py-8 px-4 mx-auto">
      {page > 1 ? (
        <button
          type="button"
          className="text-gray-900 bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 m-1 animate-pulse"
          onClick={() => setPage(page - 1)}
        >
          Page: {page - 1}
        </button>
      ) : (
        <button
          className="text-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 m-1"
          disabled
        >
          Previous
        </button>
      )}
      {page < 42 ? (
        <button
          type="button"
          className="text-gray-900 bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 m-1 animate-pulse"
          onClick={() => setPage(page + 1)}
        >
          Page: {page + 1}
        </button>
      ) : (
        <button
          className="text-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 m-1"
          disabled
        >
          Next
        </button>
      )}
    </header>
  );
}

export default Pagination;
