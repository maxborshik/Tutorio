import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Tutorio</h1>
      <p className="mt-4 text-lg text-gray-600">Your personalized learning platform.</p>
    </div>
  )
}