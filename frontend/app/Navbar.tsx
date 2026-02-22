import { logDisallowedDynamicError } from 'next/dist/server/app-render/dynamic-rendering';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 bg-gray-800 text-white py-6 border-b border-gray-700 z-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image src="/tutorio-logo.png" alt="Tutorio Logo" width={32} height={32} priority/>
                    </Link> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar;