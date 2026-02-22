"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-800 text-white py-4 border-b border-gray-700 z-10">
      <div className="max-w-10xl mx-auto px-6">
        <div className="flex justify-between items-center">
            <div className="shrink-0">
                <Link href="/">
                    <Image src="/tutorio-logo-white.png" alt="Logo" width={100} height={128} priority />
                </Link>
            </div>
          
          <div className="flex space-x-12">
            <Link 
              href="/dashboard" 
              className={`nav-btn-primary ${isActive("/dashboard") ? "nav-active" : ""}`}
            >
              Dashboard
            </Link>
            <Link 
              href="/mastery" 
              className={`nav-btn-primary ${isActive("/mastery") ? "nav-active" : ""}`}
            >
              Mastery
            </Link>
            <Link 
              href="/exam-papers" 
              className={`nav-btn-primary ${isActive("/exam-papers") ? "nav-active" : ""}`}
            >
              Exam Papers
            </Link>
            <Link 
              href="/courses" 
              className={`nav-btn-primary ${isActive("/courses") ? "nav-active" : ""}`}
            >
              Courses
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link href="/about" className={`nav-btn-secondary ${isActive("/about") ? "nav-active" : ""}`}>About</Link>
            <Link href="/support" className={`nav-btn-secondary ${isActive("/support") ? "nav-active" : ""}`}>Support</Link>
            <img src="/tutorio-icon-white-border.png" alt="Tutorio Icon" className="w-10 h-10 rounded-full border-2 border-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}