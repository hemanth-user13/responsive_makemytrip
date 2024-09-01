import React from "react";

interface SearchButtonProps {
  buttonname?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ buttonname }) => {
  return (
    <div style={{ position: "absolute", left: "480px" }}>
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-serif py-2 px-4 rounded-full w-44 text-2xl transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-blue-600 via-blue-500 to-blue-400"
      >
        {buttonname}
      </button>
    </div>
  );
};

export default SearchButton;
