// Import necessary modules
"use client";
import React, { useState, useEffect } from "react";
import Menu from "../_components/Menu";

// Define the page component
function UpdateStatsPage() {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [stats, setStats] = useState({
    appsDeveloped: "",
    downloads: "",
    averageRatings: 0,
    clientRetention: "",
  });
  const [type, setType] = useState("");

  useEffect(() => {
    const checkLogin = async () => {
      if (typeof window !== "undefined") {
        const id = localStorage.getItem("userId");
        try {
          const response = await fetch(
            `${NEXT_PUBLIC_BACKEND_URL}/check-owner`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id }),
            }
          );
          const data = await response.json();
          setType(data.type);
        } catch (err) {
          console.log(err);
        }
      }
    };

    checkLogin();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Update stats using the "/update-stats" route
    try {
      const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/update-stats`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stats),
      });

      if (response.ok) {
        // Optionally, you can display a success message or redirect to another page
        alert("Stats updated successfully");
      } else {
        console.error("Failed to update stats");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  // Fetch current stats on component mount
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/get-stats`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="h-screen overflow-y-auto">
      <div className="bg-black w-full h-[100px]"></div>
      <div className="grid grid-cols-12">
        <Menu></Menu>
        {type === "owner" ? (
          <div className="col-span-10 p-8">
            {/* Stats update form */}
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
              <label>
                Apps Developed:
                <br />
                <input
                  type="text"
                  name="appsDeveloped"
                  value={stats.appsDeveloped}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </label>
              <label>
                Downloads:
                <br />
                <input
                  type="text"
                  name="downloads"
                  value={stats.downloads}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </label>
              <label>
                Average Ratings:
                <br />
                <input
                  type="number"
                  name="averageRatings"
                  value={stats.averageRatings}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </label>
              <label>
                Client Retention:
                <br />
                <input
                  type="text"
                  name="clientRetention"
                  value={stats.clientRetention}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2"
              >
                Update Stats
              </button>
            </form>
          </div>
        ) : (
          <div className="col-span-10 col-start-3">
            <div className="py-8 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-4">
                <div className="text-red-500 text-4xl font-bold mr-4">
                  Access Denied
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 md:h-16 md:w-16 text-red-500 flex justify-center items-center"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateStatsPage;
