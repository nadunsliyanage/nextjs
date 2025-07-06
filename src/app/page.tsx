import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-gray-100 p-4">
      <h1>NICE</h1>
      <br/>
      <a href="/portal/in-focus" className="text-blue-500 hover:underline">
        In Focus
      </a>
      <br/>
      <Link href="/portal/dashboards" className="text-blue-500 hover:underline">
        Dashboards
      </Link>
    </div>

  );
}
