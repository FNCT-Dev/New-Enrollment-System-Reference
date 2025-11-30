"use client";

import { useState } from "react";
import Card from "./Card";

interface CampusSelectProps {
  onNext: (campuses: string[]) => void;
}

export default function CampusSelect({ onNext }: CampusSelectProps) {
  const campuses = [
    "Fairfax",
    "Mason Square",
    "SciTech",
    "Arlington",
    "Mason Korea",
  ];
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCampus = (campus: string) => {
    setSelected((prev) =>
      prev.includes(campus)
        ? prev.filter((c) => c !== campus)
        : [...prev, campus]
    );
  };

  return (
    <Card title="Select Campus(es)">
      <div className="flex flex-wrap gap-4 mb-4">
        {campuses.map((campus) => (
          <label
            key={campus}
            className="flex items-center gap-2 border p-2 rounded cursor-pointer hover:bg-gray-100"
          >
            <input
              type="checkbox"
              value={campus}
              checked={selected.includes(campus)}
              onChange={() => toggleCampus(campus)}
              className="w-4 h-4"
            />
            {campus}
          </label>
        ))}
      </div>
      <button
        className="w-full py-3 bg-green-500 text-white rounded-lg disabled:opacity-50 hover:bg-green-600 transition"
        disabled={selected.length === 0}
        onClick={() => onNext(selected)}
      >
        Next
      </button>
    </Card>
  );
}
