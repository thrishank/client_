"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useParams } from "next/navigation";
import Menu from "@/app/web-admin/_components/Menu";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

function page() {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [content, setContent] = useState("");
  const [imageData, setImageData] = useState(null);
  const [author, setAuthor] = useState(null);
  const [altText, setAltText] = useState({
    cover_image: "",
    text_image: [],
  });

  const addAltText = (key) => {
    setAltText((prev) => ({
      ...prev,
      [key]: [...prev[key], ""],
    }));
  };

  const handleAltTextChange = (key, index, value) => {
    setAltText((prevState) => ({
      ...prevState,
      [key]: prevState[key].map((item, i) => (i === index ? value : item)),
    }));
  };

  const removeAltText = (key, index) => {
    setAltText((prevState) => ({
      ...prevState,
      [key]: prevState[key].filter((item, i) => i !== index),
    }));
  };

  useEffect(() => {
    fetch(`${NEXT_PUBLIC_BACKEND_URL}/posts-find/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.Item.title);
        setSummary(data.Item.summary);
        setCategory(data.Item.category);
        setImageData(data.Item.image_url);
        setContent(data.Item.content);
        setAuthor(data.Item.author);
        setAltText({
          cover_image: data.Item.altText.cover_image || "",
          text_image: data.Item.altText.text_image || [],
        });
      });
  }, []);

  const handleCoverImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        setImageData(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCoverImage = () => {
    setImageData(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("image", imageData);
    const altTextJSON = JSON.stringify(altText);
    formData.append("altText", altTextJSON);

    fetch(`${NEXT_PUBLIC_BACKEND_URL}/posts-edit/${id}`, {
      method: "PUT",

      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          
          alert("Post created successfully");
          window.location.href = "/web-admin/posts/";
        } else {
          console.error("Failed to create post");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <div className=" ">
        <div className="bg-black w-full h-[100px]"></div>
        <div className=" grid grid-cols-12">
          <Menu></Menu>
          <div className="col-span-10 overflow-y-scroll">
            <div className=" p-8">
              <form
                onSubmit={handleSubmit}
                className=" w-full flex flex-col gap-4"
              >
                <input
                  type="text"
                  placeholder="Meta Title"
                  className=" w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Description"
                  className=" w-full"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Blog Title"
                  className=" w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Author Name"
                  className=" w-full"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <h2 className="text-lg font-semibold mb-4">
                  Upload Cover Image
                </h2>
                {imageData && (
                  <div className="flex items-center space-x-4">
                    <img
                      src={imageData}
                      alt="Uploaded"
                      className="w-20 h-20 object-cover"
                    />
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={handleRemoveCoverImage}
                    >
                      Remove
                    </button>
                  </div>
                )}
                <input type="file" onChange={handleCoverImageUpload} />
                <input
                  type="text"
                  placeholder="Cover Image Alt Text"
                  className="w-full"
                  value={altText.cover_image}
                  onChange={(e) =>
                    setAltText((prevState) => ({
                      ...prevState,
                      cover_image: e.target.value,
                    }))
                  }
                />
                <ReactQuill
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                ></ReactQuill>
                {altText.text_image.map((feature, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Alt Text"
                      value={feature}
                      onChange={(e) =>
                        handleAltTextChange("text_image", index, e.target.value)
                      }
                    />

                    <button
                      type="button"
                      className="bg-red-500 text-white py-4 px-6"
                      onClick={() => removeAltText("text_image", index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className=" bg-green-500 py-4 px-6 text-white"
                  onClick={() => addAltText("text_image")}
                >
                  Add Alt Text
                </button>
                <button
                  type="submit"
                  className=" py-3 px-3 rounded-md text-white bg-purple-600"
                >
                  Update Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
