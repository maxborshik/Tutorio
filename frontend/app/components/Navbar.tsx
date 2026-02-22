import { logDisallowedDynamicError } from 'next/dist/server/app-render/dynamic-rendering';
import Link from 'next/link';
import Image from 'next/image';
import type { Config } from 'tailwindcss';
import plugin from "tailwindcss/plugin";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-800 text-white py-4 border-b border-gray-700 z-10">
       <div className="max-w-1000 mx-auto pl-6 pr-10">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/tutorio-logo-white.png" alt="Tutorio Logo White" width={128} height={128} priority />
                </Link>
                <div className="flex items-center space-x-4">
                    <Link href="/mastery" className={`btn-secondary ${isActive("/mastery") ? "nav-active" : ""}`}>Mastery</Link>
                    <Link href="/exam-papers" className={`btn-secondary ${isActive("/exam-papers") ? "nav-active" : ""}`}>Exam Papers</Link>
                    <Link href="/courses" className={`btn-secondary ${isActive("/courses") ? "nav-active" : ""}`}>Courses</Link>
                </div>
                <div className="space-x-4 flex items-center">
                    <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link>
                    <Link href="/support" className={`btn-secondary ${isActive("/support") ? "nav-active" : ""}`}>Support</Link>
                </div>
            </div>
        </div>
    </nav>
  );
}
