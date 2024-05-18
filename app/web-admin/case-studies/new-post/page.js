"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // Load ReactQuill dynamically
import "react-quill/dist/quill.snow.css";
import Menu from "../../_components/Menu";

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

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");

  const [projectGoal1, setProjectGoal1] = useState("");
  const [projectGoal2, setProjectGoal2] = useState("");
  const [projectGoal3, setProjectGoal3] = useState("");
  const [features, setFeatures] = useState([]);
  const [featureDesc, setFeatureDesc] = useState("");
  const [stackDesc, setStackDesc] = useState("");

  const [techStack, setTechStack] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [stackImages, setStackImages] = useState([]);
  const [imageData, setImageData] = useState(null);

  const [altText, setAltText] = useState({
    cover_image: "",
    text_image: [],
    moreScreen_image: [],
    stack_image: [],
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

  const handleFeatureChange = (index, field, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index][field] = value;
    setFeatures(updatedFeatures);
  };

  const addFeature = () => {
    setFeatures([...features, { title: "", description: "" }]);
  };

  const removeFeature = (index) => {
    const updatedFeatures = [...features];
    updatedFeatures.splice(index, 1);
    setFeatures(updatedFeatures);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        setImages([...images, imageDataUrl]);
      };
      reader.readAsDataURL(file);
    }
  };

  const StackhandleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        setStackImages([...stackImages, imageDataUrl]);
      };
      reader.readAsDataURL(file);
    }
  };

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

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const StackhandleRemoveImage = (index) => {
    const newImages = [...stackImages];
    newImages.splice(index, 1);
    setStackImages(newImages);
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
    formData.append("coverImage", imageData);
    formData.append("content", content);
    formData.append("goal1", projectGoal1);
    formData.append("goal2", projectGoal2);
    formData.append("goal3", projectGoal3);
    formData.append("featureDesc", featureDesc);
    const featureJSON = JSON.stringify(features);
    formData.append("features", featureJSON);
    const imageJSON = JSON.stringify(images);
    formData.append("screenshots", imageJSON);
    formData.append("stackDesc", stackDesc);
    const stackJSON = JSON.stringify(stackImages);
    formData.append("stackImages", stackJSON);
    const altTextJSON = JSON.stringify(altText);
    formData.append("altText", altTextJSON);

    try {
      await fetch(`${NEXT_PUBLIC_BACKEND_URL}/submit-case-study`, {
        method: "POST",
        body: formData,
      });
      
      alert("Post submitted successfully");
      window.location.href = "/web-admin/case-studies";
    } catch (err) {
      console.error("Error submitting post:", err);
    }
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
                  placeholder="Casestudy Title"
                  className=" w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
                  onChange={(e) =>
                    setAltText((prevState) => ({
                      ...prevState,
                      cover_image: e.target.value,
                    }))
                  }
                />
                <h2>Client Requirement</h2>
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
                <input
                  type="text"
                  placeholder="Project goal 1"
                  className=" w-full"
                  value={projectGoal1}
                  onChange={(e) => setProjectGoal1(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Project goal 2"
                  className=" w-full"
                  value={projectGoal2}
                  onChange={(e) => setProjectGoal2(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Project goal 3"
                  className=" w-full"
                  value={projectGoal3}
                  onChange={(e) => setProjectGoal3(e.target.value)}
                />

                <h2 className="text-lg font-semibold mb-4">Features</h2>
                {features.map((feature, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Feature Title"
                      value={feature.title}
                      onChange={(e) =>
                        handleFeatureChange(index, "title", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Feature Description"
                      value={feature.description}
                      onChange={(e) =>
                        handleFeatureChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                    />
                    <button
                      type="button"
                      className=" bg-red-500 text-white py-4 px-6"
                      onClick={() => removeFeature(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className=" bg-green-500 py-4 px-6 text-white"
                  onClick={addFeature}
                >
                  Add Feature
                </button>

                <h2 className="text-lg font-semibold mb-4">More Screen</h2>
                <div className="space-y-4">
                  {images.map((image, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <img
                        src={image}
                        alt="Uploaded"
                        className="w-20 h-20 object-cover"
                      />
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => handleRemoveImage(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <input type="file" onChange={handleImageUpload} />
                {altText.moreScreen_image.map((feature, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Alt Text"
                      value={feature}
                      onChange={(e) =>
                        handleAltTextChange(
                          "moreScreen_image",
                          index,
                          e.target.value
                        )
                      }
                    />

                    <button
                      type="button"
                      className="bg-red-500 text-white py-4 px-6"
                      onClick={() => removeAltText("moreScreen_image", index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className=" bg-green-500 py-4 px-6 text-white"
                  onClick={() => addAltText("moreScreen_image")}
                >
                  Add Alt Text for More Screen Image
                </button>

                <h2 className="text-lg font-semibold mb-4">
                  Technology we use
                </h2>
                <input
                  type="text"
                  placeholder="Stack Description"
                  className=" w-full"
                  value={stackDesc}
                  onChange={(e) => setStackDesc(e.target.value)}
                />
                <div className="space-y-4">
                  {stackImages.map((image, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <img
                        src={image}
                        alt="Uploaded"
                        className="w-20 h-20 object-cover"
                      />
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => StackhandleRemoveImage(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <input type="file" onChange={StackhandleImageUpload} />
                {altText.stack_image.map((feature, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Alt Text"
                      value={feature}
                      onChange={(e) =>
                        handleAltTextChange(
                          "stack_image",
                          index,
                          e.target.value
                        )
                      }
                    />

                    <button
                      type="button"
                      className="bg-red-500 text-white py-4 px-6"
                      onClick={() => removeAltText("stack_image", index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className=" bg-green-500 py-4 px-6 text-white"
                  onClick={() => addAltText("stack_image")}
                >
                  Add Alt Text Image For Technology Images
                </button>
                <button
                  type="submit"
                  className=" py-3 px-3 rounded-md text-white bg-purple-600"
                >
                  Create Post
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
