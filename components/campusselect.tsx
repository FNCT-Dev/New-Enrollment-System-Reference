"use client";

import { useState } from "react";

interface CampusSelectProps {
  onNext: (campus: string) => void;
}

export default function CampusSelect({ onNext }: CampusSelectProps) {
  const campuses = [
    "Fairfax",
    "Mason Square",
    "SciTech",
    "Arlington",
    "Mason Korea",
  ];
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="my-4 p-4 border rounded">
      <label className="block mb-2 font-semibold">Select Campus</label>
      <div className="flex flex-col gap-2 mb-4">
        {campuses.map((campus) => (
          <label key={campus} className="flex items-center gap-2">
            <input
              type="radio"
              name="campus"
              value={campus}
              checked={selected === campus}
              onChange={() => setSelected(campus)}
            />
            {campus}
          </label>
        ))}
      </div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
        disabled={!selected}
        onClick={() => onNext(selected)}
      >
        Next
      </button>
    </div>
  );
}
