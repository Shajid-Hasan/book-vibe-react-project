import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { getStoredBook } from "../../Utility/addToDB";
import "react-tabs/style/react-tabs.css";
import Book from "../../Pages/Book/Book"; // ✅ Import Book component correctly

const ReadList = () => {
  // 🔹 State to store books the user has marked as read
  const [readList, setReadList] = useState([]);
  // 🔹 State to track which sort option is active
  const [sort, setSort] = useState("");

  // 🔹 Data loaded from the parent route loader (list of all books)
  const data = useLoaderData();

  // 🔹 Load user's read list from localStorage
  useEffect(() => {
    const storedBookData = getStoredBook(); // IDs from localStorage
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id)); // Convert string IDs → numbers

    // Filter the main data array to get only the user's read books
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );

    setReadList(myReadList);
  }, [data]);

  // 🔹 Handle sorting logic
  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      // Sort by total pages (ascending)
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }

    if (type === "ratings") {
      // Sort by rating (descending — highest first)
      const sortedByRating = [...readList].sort(
        (a, b) => b.rating - a.rating
      );
      setReadList(sortedByRating);
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      {/* 🔹 Page Title */}
      <title>Book Vibe - Read List</title>

      {/* 🔹 Dropdown Sort Menu */}
      <details className="dropdown mb-4">
        <summary className="btn m-1">Sort by : {sort || "Select"}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            {/* ✅ Added missing onClick */}
            <a onClick={() => handleSort("ratings")}>Rating</a>
          </li>
        </ul>
      </details>

      {/* 🔹 React Tabs */}
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        {/* --- Read List Panel --- */}
        <TabPanel>
          <h2 className="text-xl font-bold mb-5">
            Books I Read ({readList.length})
          </h2>

          {readList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {readList.map((b) => (
                <Book key={b.bookId} singleBook={b} />
              ))}
            </div>
          ) : (
            <p>No books found in your read list.</p>
          )}
        </TabPanel>

        {/* --- Wish List Panel --- */}
        <TabPanel>
          <h2 className="text-xl font-bold mb-5">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
