import PropTypes from "prop-types";

function ShopPageButton({ pageNumber, selected, currentPage, setCurrentPage }) {
  pageNumber = pageNumber || 1;
  selected = selected || false;

  if (currentPage === pageNumber) {
    selected = true;
  } else {
    selected = false;
  }

  return (
    <>
      <li>
        <a
          href="#"
          className={
            selected
              ? "block size-8 rounded border-black bg-black text-center leading-8 text-white"
              : "block size-8 rounded border border-gray-100 text-center leading-8"
          }
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </a>
      </li>
    </>
  );
}

ShopPageButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default ShopPageButton;
