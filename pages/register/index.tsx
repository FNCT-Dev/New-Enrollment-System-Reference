"use client";

import { useState } from "react";
import SemesterSelect from "../../components/SemesterSelect";

export default function Register() {
  const [semester, setSemester] = useState<string | null>(null);

  const handleNext = (selected: string) => {
    setSemester(selected);
    // 여기에 다음 단계 로직 추가 가능 (예: 클래스 리스트 렌더링)
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Register for Classes</h1>

      {!semester ? (
        <SemesterSelect onNext={handleNext} />
      ) : (
        <div>
          <p className="mb-4">
            Selected semester: <strong>{semester}</strong>
          </p>
          {/* 여기서 선택된 학기에 대한 수업 리스트 렌더링 가능 */}
        </div>
      )}
    </div>
  );
}
