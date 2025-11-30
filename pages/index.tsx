import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="" />
      <main className="flex-1 p-4">
        <h2 className="text-2xl font-semibold">Welcome!</h2>
        <p>메인 콘텐츠 영역입니다.</p>
      </main>
    </div>
  );
}
