"use client";
import React, { useEffect, useState } from "react";
import Menu from "../_components/Menu";

function Page() {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [leads, setLeads] = useState([]);
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

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/all-leads`);
        const data = await response.json();

        setLeads(data.Items);
      } catch (error) {
        console.error("Failed to fetch leads", error);
      }
    };

    fetchLeads();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${NEXT_PUBLIC_BACKEND_URL}/delete-lead/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      alert("Post deleted successfully");
      //reload page
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" h-screen overflow-y-auto">
      <div className="bg-black w-full h-[100px]"></div>
      <div className="grid grid-cols-12">
        <Menu />
        {type === "owner" ? (
          <div className="col-span-10 overflow-y-scroll">
            {/* Table to display leads */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Whatsapp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Country
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads &&
                  leads.map((lead) => (
                    <tr key={lead._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {lead.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {lead.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {lead.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {lead.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {lead.whatsapp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {lead.budget}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {lead.country}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {lead.message}
                      </td>
                      <button
                        onClick={() => handleDelete(lead.id)}
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
