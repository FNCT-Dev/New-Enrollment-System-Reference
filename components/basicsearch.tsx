"use client";

import { useState } from "react";
import Card from "./Card";

interface BasicSearchParams {
  subject: string;
  courseNumber: string;
  keywords: string;
  coreAttributes: string;
  openOnly: boolean;
}

interface BasicSearchProps {
  onSearch?: (params: BasicSearchParams) => void;
}

export default function BasicSearch({ onSearch }: BasicSearchProps) {
  const [params, setParams] = useState<BasicSearchParams>({
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

  const handleSearch = () => onSearch?.(params);

  return (
    <Card title="Basic Search" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="subject"
          placeholder="Subject"
          className="border p-2 rounded w-full"
          onChange={handleChange}
        />
        <input
          name="courseNumber"
          placeholder="Course Number"
          className="border p-2 rounded w-full"
          onChange={handleChange}
        />
        <input
          name="keywords"
          placeholder="Keywords"
          className="border p-2 rounded w-full"
          onChange={handleChange}
        />
        <input
          name="coreAttributes"
          placeholder="Attributes - Mason Core"
          className="border p-2 rounded w-full"
          onChange={handleChange}
        />
        <label className="col-span-1 md:col-span-2 flex items-center gap-2">
          <input type="checkbox" name="openOnly" onChange={handleChange} />
          Open Section Only
        </label>
      </div>

      <button
        className="mt-4 w-full py-3 bg-[#005239] text-white rounded-lg hover:bg-[#1B815F] transition"
        onClick={handleSearch}
      >
        Search
      </button>
    </Card>
  );
}
