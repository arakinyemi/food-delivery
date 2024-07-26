import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex flex-col gap-8 justify-center items-center min-h-screen">
        <p className="text-center text-4xl font-semibold">Sorry Page Not Found!</p>
        <Link href="/" className="text-xl font-medium text-blue-600">Go to Home Page</Link>
      </div>
    );
  }
  