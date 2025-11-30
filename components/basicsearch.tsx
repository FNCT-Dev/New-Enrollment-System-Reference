"use client";

import { useState } from "react";

export default function BasicSearch({
  onSearch,
}: {
  onSearch: (params: any) => void;
}) {
  const [params, setParams] = useState({
    subject: "",
    courseNumber: "",
    keywords: "",
    coreAttributes: "",
    openOnly: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setParams((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSearch = () => onSearch(params);

  return (
    <div className="my-4 p-4 border rounded">
      <div className="grid grid-cols-2 gap-4">
        <input
          name="Subject"
          placeholder="Subject"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="courseNumber"
          placeholder="Course Number"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="keywords"
          placeholder="Keywords"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="coreAttributes"
          placeholder="Attributes - Mason Core"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <label className="col-span-2 flex items-center gap-2">
          <input type="checkbox" name="openOnly" onChange={handleChange} />
          Open Section Only
        </label>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
