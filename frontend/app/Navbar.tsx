import { logDisallowedDynamicError } from 'next/dist/server/app-render/dynamic-rendering';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 bg-gray-800 text-white py-4 border-b border-gray-700 z-10">
            <div className="max-w-1000 mx-auto pl-6 pr-10">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image src="/tutorio-logo-white.png" alt="Tutorio Logo White" width={128} height={128} priority/>
                    </Link>
                    <div className="space-x-6 items-center">
                        <Link href="/dashboard" className="hover:text-gray-300 transition-colors duration-200">Dashboard</Link>
                        <Link href="/mastery" className="hover:text-gray-300 transition-colors duration-200">Mastery</Link>
                        <Link href="/exam-papers" className="hover:text-gray-300 transition-colors duration-200">Exam Papers</Link>
                        <Link href="/courses" className="hover:text-gray-300 transition-colors duration-200">Courses</Link>
                    </div>
                    <div className="space-x-6">
                        <Link href="/dashboard" className="hover:text-gray-300 transition-colors duration-200">Dashboard</Link>
                        <Link href="/mastery" className="hover:text-gray-300 transition-colors duration-200">Mastery</Link>
                        <Link href="/exam-papers" className="hover:text-gray-300 transition-colors duration-200">Exam Papers</Link>
                        <Link href="/courses" className="hover:text-gray-300 transition-colors duration-200">Courses</Link>
                        <Link href="/about" className="hover:text-gray-300 transition-colors duration-200">About</Link>
                        <Link href="/support" className="hover:text-gray-300 transition-colors duration-200">Support</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;