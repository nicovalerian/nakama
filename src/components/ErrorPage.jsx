import Header from "./Header";
import PropTypes from "prop-types";

function ErrorPage({ message }) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl mb-8">
              {message ? message : "Error"}
            </h1>
          </header>
          <div className="text-center">
            <p className="text-lg text-gray-700">
              Sorry, an error occurred. Please try again later.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};

export default ErrorPage;
