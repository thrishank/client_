"use client";
// Import necessary modules
import React, { useState, useEffect } from "react";
import Menu from "../_components/Menu";

// Define the page component
function Page() {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [users, setUsers] = useState([]);
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
  // Function to fetch users
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/fetch-users`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("userId");
      localStorage.removeItem("type");
      window.location.href = "/web-admin/login"; // Adjust the path accordingly
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${NEXT_PUBLIC_BACKEND_URL}/users-delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      alert("Post deleted successfully");

      window.location.reload();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <div className="h-screen overflow-y-auto">
      <div className="bg-black w-full h-[100px]"></div>
      <div className="grid grid-cols-12">
        <Menu></Menu>
        {type === "owner" ? (
          <div className="col-span-10 p-8">
            <div className="flex ">
              <div className=" ml-auto">
                {" "}
                <a href="/web-admin/users/new">
                  <button className=" bg-blue-500 text-white py-4 px-5">
                    Add New User
                  </button>
                </a>
                <button
                  onClick={logout}
                  className=" bg-red-500 text-white py-4 px-5"
                >
                  Logout
                </button>
              </div>
            </div>
            {/* Display users in a table */}
            <table className="min-w-full divide-y divide-gray-200 mt-4">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.email}
                    </td>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="py-2 px-6 bg-red-500 text-white"
                    >
                      Delete
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="col-span-10 col-start-3">
            <div className="">
              <div className=" ml-auto flex justify-around py-8">
                {" "}
                <button
                  onClick={logout}
                  className=" bg-red-500 text-white py-4 px-5"
                >
                  Logout
                </button>
              </div>
            </div>
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

export default Page;
