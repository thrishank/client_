"use client";
import React, { useEffect, useState } from "react";

function page() {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [change, setChange] = useState(false);

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
          if (response.status === 200) {
            if (typeof window !== "undefined") {
              window.location.href = "/web-admin/posts";
            }
          }
        } catch (err) {
          console.log(err);
        }
      }
    };

    checkLogin();
  }, []);

  const handleChangePassword = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${NEXT_PUBLIC_BACKEND_URL}/change-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ oldPassword, newPassword, email }),
        }
      );

      if (response.ok) {
        // Password changed successfully
        alert("Password changed successfully.");
        setOldPassword("");
        setNewPassword("");
      } else {
        const errorData = await response.json();
        alert("Password changed failed.");
        console.error("Password change failed:", errorData.message);
      }
    } catch (error) {
      alert("Password changed failed.");
      console.error("Error changing password:", error.message);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if the login was successful
      if (response.ok) {
        const data = await response.json();
        if (typeof window !== "undefined") {
          console.log("check");
          localStorage.setItem("userId", data.id);
          localStorage.setItem("type", data.ownership);
        }

        if (typeof window !== "undefined") {
          window.location.href = "/web-admin/posts";
        }
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
        // Handle login failure, such as displaying an error message to the user
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      // Handle other errors, such as displaying an error message to the user
    }
  };

  return (
    <div>
      <div className="bg-black w-full h-[100px]"></div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Overninja
              </h1>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Login Account
                  </button>
                </div>
              </form>
              <div className="col-span-6 py-4 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  onClick={() => setChange(true)}
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  change Password
                </button>
              </div>
              {change && (
                <form
                  onSubmit={handleChangePassword}
                  className="mt-8 grid grid-cols-6 gap-6"
                >
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="OldPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Old Password
                    </label>
                    <input
                      type="password"
                      id="OldPassword"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="NewPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="NewPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      type="submit"
                      className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                      Change Password
                    </button>
                  </div>
                </form>
              )}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default page;
