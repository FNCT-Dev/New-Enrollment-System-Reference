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
  const [step, setStep] = useState(1);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedCampus, setSelectedCampuses] = useState<string[]>([]);
  const [advancedParams, setAdvancedParams] =
    useState<AdvancedSearchParams | null>(null);

  const [showAdvanced, setShowAdvanced] = useState(false);

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
      campuses: selectedCampus,
      advanced: advancedParams,
    });
    alert("Search triggered! Check console for params.");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {step === 1 && <SemesterSelect onNext={handleSemesterNext} />}

      {step === 2 && (
        <Card title="Select Campus">
          <div className="mb-4 font-semibold">
            Selected Semester: {selectedSemester}
          </div>

          <CampusSelect onNext={handleCampusNext} />

          <div className="flex justify-start mt-6">
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
            <div>Selected Campus: {selectedCampus.join(", ")}</div>
          </div>

          <div className="w-full">
            <BasicSearch onSearch={handleSearch} />
          </div>

          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="mt-4 w-full py-3 bg-[#005239] text-white rounded-lg hover:bg-[#1B815F] transition font-semibold"
          >
            {showAdvanced ? "Hide Advanced Search ▲" : "Show Advanced Search ▼"}
          </button>

          {showAdvanced && (
            <div className="mt-4 w-full animate-fadeIn">
              <AdvancedSearch
                onChange={handleAdvancedChange}
                className="w-full"
              />
            </div>
          )}

          <div className="flex justify-start mt-6">
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={() => setStep(2)}
            >
              Back
            </button>
          </div>
        </Card>
      )}
    </div>
  );
}
