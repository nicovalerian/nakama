import PropTypes from "prop-types";
import ShopPageButton from "./ShopPageButton";


function ShopPagination({ numberOfPages, currentPage, setCurrentPage }) {
  return (
    <>
      <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
            onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        {Array.from({ length: numberOfPages }).map((_, index) => (
          <ShopPageButton
            key={index}
            pageNumber={index + 1}
            selected={index === 0}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ))}

        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
            onClick={() => setCurrentPage(currentPage < numberOfPages ? currentPage + 1 : numberOfPages)}
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </>
  );
}

ShopPagination.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default ShopPagination;
