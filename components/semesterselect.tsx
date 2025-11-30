"use client";

import { useState } from "react";

interface SemesterSelectProps {
  onNext: (semester: string) => void;
}

export default function SemesterSelect({ onNext }: SemesterSelectProps) {
  const semesters = ["Spring 2025", "Fall 2025"];
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="my-4 p-4 border rounded">
      <label className="block mb-2 font-semibold">Select Semester</label>
      <div className="flex flex-col gap-2 mb-4">
        {semesters.map((sem) => (
          <label key={sem} className="flex items-center gap-2">
            <input
              type="radio"
              name="semester"
              value={sem}
              checked={selected === sem}
              onChange={() => setSelected(sem)}
            />
            {sem}
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
