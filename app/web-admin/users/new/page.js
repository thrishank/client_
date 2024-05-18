"use client";

import React, { useState, useEffect } from "react";
import Menu from "../../_components/Menu";

function Page() {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ownership, setOwnership] = useState("owner");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/create-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, ownership }),
      });
      if (response.ok) {
        alert("User created successfully");
        window.location.href = "/web-admin/users/";
        setName("");
        setEmail("");
        setPassword("");
        setOwnership("owner");
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOwnershipChange = (e) => {
    setOwnership(e.target.value);
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="bg-black w-full h-[100px]"></div>
      <div className="grid grid-cols-12">
        <Menu></Menu>
        <div className="col-span-10 p-8">
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
            <label>
              Name: <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full"
              />
            </label>
            <label>
              Email: <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full"
              />
            </label>
            <label>
              Password: <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full"
              />
            </label>
            <label>
              Ownership:
              <br />
              <select
                value={ownership}
                onChange={handleOwnershipChange}
                className="border p-2 w-full"
              >
                <option value="owner">Owner</option>
                <option value="employee">Employee</option>
              </select>
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
