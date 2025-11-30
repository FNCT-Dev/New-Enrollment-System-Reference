import { useState } from "react";

export default function AdvancedSearch({
  onChange,
}: {
  onChange: (params: any) => void;
}) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const levels = Array.from({ length: 7 }, (_, i) => i * 100); // 0~600
  const partOfTerms = [
    "Full",
    "1st Half",
    "2nd Half",
    "Modular",
    "A",
    "B",
    "C",
  ];

  const [params, setParams] = useState({
    meetingDays: [] as string[],
    startTime: { hh: "12", mm: "00", ampm: "AM" },
    endTime: { hh: "12", mm: "00", ampm: "PM" },
    level: "",
    instructor: "",
    creditRange: { min: "", max: "" },
    partOfTerm: "",
  });

  const updateParams = (updated: any) => {
    setParams(updated);
    onChange(updated);
  };

  const toggleDay = (day: string) => {
    const updatedDays = params.meetingDays.includes(day)
      ? params.meetingDays.filter((d) => d !== day)
      : [...params.meetingDays, day];

    updateParams({ ...params, meetingDays: updatedDays });
  };

  const handleFieldChange = (field: string, value: any) => {
    const updated = { ...params, [field]: value };
    updateParams(updated);
  };

  return (
    <div className="my-4 p-4 border rounded space-y-6">
      {/* Meeting Days */}
      <div>
        <div className="mb-2 font-semibold">Meeting Days</div>
        <div className="flex gap-4 flex-wrap">
          {days.map((day) => (
            <label key={day} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={params.meetingDays.includes(day)}
                onChange={() => toggleDay(day)}
              />
              {day}
            </label>
          ))}
        </div>
      </div>

      {/* Meeting Time */}
      <div>
        <div className="font-semibold mb-2">Meeting Time</div>

        {/* Start / End Time */}
        <div className="grid grid-cols-2 gap-4">
          {/* Start Time */}
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
                    ampm: e.target.value,
                  })
                }
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>

          {/* End Time */}
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
                    ampm: e.target.value,
                  })
                }
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Level */}
      <div>
        <label className="block font-semibold mb-2">Level</label>
        <select
          className="border p-2 rounded w-40"
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

      {/* Instructor */}
      <div>
        <label className="block font-semibold mb-2">Instructor</label>
        <input
          className="border p-2 rounded w-full"
          placeholder="Instructor name"
          value={params.instructor}
          onChange={(e) => handleFieldChange("instructor", e.target.value)}
        />
      </div>

      {/* Credit Hour Range */}
      <div>
        <label className="block font-semibold mb-2">Credit Hour Range</label>
        <div className="flex items-center gap-2">
          <input
            className="border p-2 rounded w-20"
            type="number"
            min="0"
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
            min="0"
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

      {/* Part of Term */}
      <div>
        <label className="block font-semibold mb-2">Part of Term</label>
        <select
          className="border p-2 rounded w-40"
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
  );
}
