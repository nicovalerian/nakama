import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/shop");
    }
  };

  return (
    <>
      <button onClick={handleClick} className="inline-block rounded-full border border-black-600 p-3 text-black hover:bg-transparent hover:text-nakamaRed focus:outline-none active:border-nakamaRed active:text-nakamaRed">
        <svg
          className="size-5 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </>
  );
}

export default BackButton;
