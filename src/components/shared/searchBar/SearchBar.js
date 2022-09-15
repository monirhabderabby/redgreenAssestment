import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    return (
        <div>
            <input
                className=" ml-2 md:ml-0 md:w-full h-full outline-none bg-cs__gray py-[7.5px] px-[6px] text-[14px] rounded-searchBar "
                placeholder="Search"
                type="text"
            />
            <FiSearch className="absolute right-2 top-[5px] w-[20px] h-[20px] text-gray-400 hover:text-gray-500" />
        </div>
    );
};

export default SearchBar;
