const Pagination = ({
  setCurrentPage,
  pages,
  currentPage,
}: {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number[];
  currentPage: number;
}) => {
  return (
    <div className="pagination">
      {pages.map((page: number) => {
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage ? "active btn btn-page" : "btn btn-page"
            }
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
