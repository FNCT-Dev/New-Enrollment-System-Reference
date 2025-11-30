"use client";

import { useState } from "react";
import Card from "./Card";

type Time = { hh: string; mm: string; ampm: "AM" | "PM" };
type CreditRange = { min: string; max: string };

export type AdvancedSearchParams = {
  meetingDays: string[];
  startTime: Time;
  endTime: Time;
  level: string;
  instructor: string;
  creditRange: CreditRange;
  partOfTerm: string;
};

interface AdvancedSearchProps {
  onChange: (params: AdvancedSearchParams) => void;
  className?: string;
}

export default function AdvancedSearch({
  onChange,
  className = "",
}: AdvancedSearchProps) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const levels = Array.from({ length: 7 }, (_, i) => i * 100);
  const partOfTerms = [
    "Full",
    "1st Half",
    "2nd Half",
    "Modular",
    "A",
    "B",
    "C",
  ];

  const [params, setParams] = useState<AdvancedSearchParams>({
    meetingDays: [],
    startTime: { hh: "12", mm: "00", ampm: "AM" },
    endTime: { hh: "12", mm: "00", ampm: "PM" },
    level: "",
    instructor: "",
    creditRange: { min: "", max: "" },
    partOfTerm: "",
  });

  const updateParams = (updated: AdvancedSearchParams) => {
    setParams(updated);
    onChange(updated);
  };

  const toggleDay = (day: string) => {
    const updatedDays = params.meetingDays.includes(day)
      ? params.meetingDays.filter((d) => d !== day)
      : [...params.meetingDays, day];
    updateParams({ ...params, meetingDays: updatedDays });
  };

  const handleFieldChange = <K extends keyof AdvancedSearchParams>(
    field: K,
    value: AdvancedSearchParams[K]
  ) => updateParams({ ...params, [field]: value });

  return (
    <Card title="Advanced Search" className={`w-full ${className}`}>
      <div className="mb-4">
        <div className="mb-2 font-semibold">Meeting Days</div>
        <div className="flex flex-wrap gap-4">
          {days.map((day) => (
            <label key={day} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={params.meetingDays.includes(day)}
                onChange={() => toggleDay(day)}
                className="w-4 h-4"
              />
              {day}
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1 font-medium">Start Time</label>
          <div className="flex gap-2">
            <input
              className="border p-1 w-14 rounded"
              maxLength={2}
              value={params.startTime.hh}
              onChange={(e) =>
                handleFieldChange("startTime", {
                  ...params.startTime,
                  hh: e.target.value,
                })
              }
            />
            <span>:</span>
            <input
              className="border p-1 w-14 rounded"
              maxLength={2}
              value={params.startTime.mm}
              onChange={(e) =>
                handleFieldChange("startTime", {
                  ...params.startTime,
                  mm: e.target.value,
                })
              }
            />
            <select
              className="border p-1 rounded"
              value={params.startTime.ampm}
              onChange={(e) =>
                handleFieldChange("startTime", {
                  ...params.startTime,
                  ampm: e.target.value as "AM" | "PM",
                })
              }
            >
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium">End Time</label>
          <div className="flex gap-2">
            <input
              className="border p-1 w-14 rounded"
              maxLength={2}
              value={params.endTime.hh}
              onChange={(e) =>
                handleFieldChange("endTime", {
                  ...params.endTime,
                  hh: e.target.value,
                })
              }
            />
            <span>:</span>
            <input
              className="border p-1 w-14 rounded"
              maxLength={2}
              value={params.endTime.mm}
              onChange={(e) =>
                handleFieldChange("endTime", {
                  ...params.endTime,
                  mm: e.target.value,
                })
              }
            />
            <select
              className="border p-1 rounded"
              value={params.endTime.ampm}
              onChange={(e) =>
                handleFieldChange("endTime", {
                  ...params.endTime,
                  ampm: e.target.value as "AM" | "PM",
                })
              }
            >
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-semibold mb-1">Level</label>
          <select
            className="border p-2 rounded w-full"
            value={params.level}
            onChange={(e) => handleFieldChange("level", e.target.value)}
          >
            <option value="">Any</option>
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Instructor</label>
          <input
            className="border p-2 rounded w-full"
            placeholder="Instructor name"
            value={params.instructor}
            onChange={(e) => handleFieldChange("instructor", e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Credit Hour Range</label>
          <div className="flex gap-2">
            <input
              className="border p-2 rounded w-20"
              type="number"
              min={0}
              placeholder="Min"
              value={params.creditRange.min}
              onChange={(e) =>
                handleFieldChange("creditRange", {
                  ...params.creditRange,
                  min: e.target.value,
                })
              }
            />
            <span>~</span>
            <input
              className="border p-2 rounded w-20"
              type="number"
              min={0}
              placeholder="Max"
              value={params.creditRange.max}
              onChange={(e) =>
                handleFieldChange("creditRange", {
                  ...params.creditRange,
                  max: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Part of Term</label>
          <select
            className="border p-2 rounded w-full"
            value={params.partOfTerm}
            onChange={(e) => handleFieldChange("partOfTerm", e.target.value)}
          >
            <option value="">Any</option>
            {partOfTerms.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
    </Card>
  );
}
