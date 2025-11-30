"use client";

import { useState } from "react";
import { semesters } from "./Semesters";
import Card from "./Card";

interface SemesterSelectProps {
  onNext: (semester: string) => void;
}

export default function SemesterSelect({ onNext }: SemesterSelectProps) {
  const [selected, setSelected] = useState<string>("");

  return (
    <Card title="Select Semester">
      <select
        className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="" disabled>
          -- Choose a semester --
        </option>
        {semesters.map((sem: string) => (
          <option key={sem} value={sem}>
            {sem}
          </option>
        ))}
      </select>

      <button
        className="w-full py-3 bg-green-500 text-white rounded-lg disabled:opacity-50 hover:bg-green-600 transition"
        disabled={!selected}
        onClick={() => onNext(selected)}
      >
        Next
      </button>
    </Card>
  );
}
