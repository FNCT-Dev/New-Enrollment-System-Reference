"use client";

import { useState } from "react";
import SemesterSelect from "@/components/SemesterSelect";
import CampusSelect from "@/components/CampusSelect";
import BasicSearch from "@/components/BasicSearch";
import AdvancedSearch, {
  AdvancedSearchParams,
} from "@/components/AdvancedSearch";
import Card from "@/components/Card";

export default function RegisterPage() {
  const [step, setStep] = useState(1); // 1: Semester, 2: Campus, 3: Search
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedCampuses, setSelectedCampuses] = useState<string[]>([]);
  const [advancedParams, setAdvancedParams] =
    useState<AdvancedSearchParams | null>(null);

  const handleSemesterNext = (semester: string) => {
    setSelectedSemester(semester);
    setStep(2);
  };

  const handleCampusNext = (campuses: string[]) => {
    setSelectedCampuses(campuses);
    setStep(3);
  };

  const handleAdvancedChange = (params: AdvancedSearchParams) => {
    setAdvancedParams(params);
  };

  const handleSearch = () => {
    console.log({
      semester: selectedSemester,
      campuses: selectedCampuses,
      advanced: advancedParams,
    });
    alert("Search triggered! Check console for params.");
  };

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      {step === 1 && <SemesterSelect onNext={handleSemesterNext} />}

      {step === 2 && (
        <Card title="Select Campus(es)">
          <div className="mb-4">
            <div className="mb-2 font-semibold">
              Selected Semester: {selectedSemester}
            </div>
          </div>
          <CampusSelect onNext={handleCampusNext} />
          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={() => setStep(1)}
            >
              Back
            </button>
          </div>
        </Card>
      )}

      {step === 3 && (
        <Card title="Course Search" className="w-full">
          <div className="mb-4">
            <div>Selected Semester: {selectedSemester}</div>
            <div>Selected Campuses: {selectedCampuses.join(", ")}</div>
          </div>

          <BasicSearch />

          <AdvancedSearch
            onChange={handleAdvancedChange}
            className="w-full mt-4"
          />

          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={() => setStep(2)}
            >
              Back
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </Card>
      )}
    </div>
  );
}
