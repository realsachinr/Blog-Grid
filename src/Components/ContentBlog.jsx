import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { data } from "../Data/data";
import Template from "./Template";

function ContentBlog() {
  const [searchBox, setSearchBox] = useState("");
  const [search, setSearch] = useState(data);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the total number of pages
  const totalPages = Math.ceil(search.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle "Next" button click
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calculate the data to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = search.slice(startIndex, startIndex + itemsPerPage);

  function submitHandler(event) {
    event.preventDefault();
    const trimmedSearchBox = searchBox.trim().toLowerCase();
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(trimmedSearchBox)
    );
    setSearch(filteredData);
    setActiveFilter("All");
    setCurrentPage(1); // Reset to the first page
  }

  function handleInputChange(e) {
    setSearchBox(e.target.value);
    if (e.target.value === "") {
      setSearch(data);
      setActiveFilter("All");
      setCurrentPage(1); // Reset to the first page
    }
  }

  function handleFilterChange(category) {
    setActiveFilter(category);
    if (category === "All") {
      setSearch(data);
    } else {
      const filteredData = data.filter((item) => item.category === category);
      setSearch(filteredData);
    }
    setSearchBox("");
    setCurrentPage(1); // Reset to the first page
  }

  return (
    <section className="bg-[#D3E3FD] w-full h-full">
      <form
        className="flex gap-3 pt-2 justify-center items-center"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="blog"
          name="blog"
          value={searchBox}
          onChange={handleInputChange}
          placeholder="Search Blog"
        />
        <button type="submit" className="rounded-full">
          <CiSearch className="text-black animate-bounce text-2xl" />
        </button>
      </form>

      {/* Filter Tags by category */}
      <div className="flex justify-center pt-5">
        <div className="flex gap-2">
          {["All", "Business", "Agency", "Info", "World"].map((category) => (
            <button
              key={category}
              className={`border-2 ${
                activeFilter === category
                  ? "bg-gray-300 text-white"
                  : "border-gray-300"
              } rounded-full px-4 py-2 text-gray-800 text-sm`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        {/* Render based on search results */}
        {currentData.length > 0 ? (
          <Template search={currentData} />
        ) : (
          <div className="text-center pt-16 font-bold text-red-500">
            No Records Found
          </div>
        )}
      </div>

      <div className=" flex mt-7 justify-center gap-5 items-center left-[50%]">
        <button
          onClick={handlePrevious}
          className="border-2 active:bg-black active:text-white bg-gray-300 text-gray-800 rounded-full px-4 py-2 text-sm"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          className="border-2 active:bg-black active:text-white bg-gray-300 text-gray-800 rounded-full px-4 py-2 text-sm"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default ContentBlog;
