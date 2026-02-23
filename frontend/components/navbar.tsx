"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { List } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname() 
    const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
}

  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-800 text-white py-2 border-b border-gray-700 z-10">
        <div className="max-w-10xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
            <div className="shrink-0">
                <Link href="/">
                    <Image src="/tutorio-logo-white.png" alt="Logo" width={80} height={80} priority />
                </Link>
            </div>
          
            <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              
                <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white hover:bg-gray-700 hover:text-white ${isActive("/dashboard") ? "bg-gray-500" : "bg-transparent"}`}>
                            <Link href="/dashboard" passHref>
                                Dashboard
                            </Link>
                        </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white hover:bg-gray-700 hover:text-white ${isActive("/mastery") ? "bg-gray-500" : "bg-transparent"}`}>
                            <Link href="/mastery" passHref>
                                Mastery
                            </Link>
                        </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={`text-white hover:bg-gray-700 hover:text-white ${isActive("/courses") ? "bg-gray-500" : "bg-transparent"}`}>
                        Courses
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                    <ul className="grid w-80 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150 bg-gray-800 border border-gray-700 rounded-md">
                        <li className="col-span-2 pt-2">
                            <NavigationMenuLink asChild>
                                <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-blue-600 to-blue-900 p-6 no-underline outline-none focus:shadow-md" href="/courses">
                                <div className="mb-2 mt-4 text-lg font-medium text-white">All Courses</div>
                                <p className="text-sm leading-tight text-white/90">Browse the complete library of university-level modules.</p>
                                </a>
                            </NavigationMenuLink>
                        </li>

                        <ListItem href="/courses/maths" title="Mathematics">Advanced calculus and linear algebra.</ListItem>
                        <ListItem href="/courses/cs" title="Computer Science">Algorithms and data structures.</ListItem>
                        <ListItem href="/courses/physics" title="Physics">Classical mechanics and electromagnetism.</ListItem>
                        <ListItem href="/courses/chemistry" title="Chemistry">Organic and inorganic chemistry.</ListItem>
                        <ListItem href="/courses/biology" title="Biology">Cell biology and genetics.</ListItem>
                        <ListItem href="/courses/history" title="History">World history and civilizations.</ListItem>
                        <ListItem href="/courses/literature" title="Literature">Shakespeare and modern novels.</ListItem>
                        <ListItem href="/courses/economics" title="Economics">Microeconomics and macroeconomics.</ListItem>
                    </ul>
                    </NavigationMenuContent>

                </NavigationMenuItem>
                                <NavigationMenuItem>
                    <NavigationMenuTrigger className={`text-white hover:bg-gray-700 hover:text-white ${isActive("/modules") ? "bg-gray-500" : "bg-transparent"}`}>
                        Modules
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                    <ul className="grid w-80 gap-3 p-4 md:w-125 md:grid-cols-3 lg:w-200 bg-gray-800 border border-gray-700 rounded-md">
                        <li className="row-span-2">
                            <NavigationMenuLink asChild>
                                <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-blue-600 to-blue-900 p-6 no-underline outline-none focus:shadow-md" href="/modules">
                                <div className="mb-2 mt-4 text-lg font-medium text-white">All Modules </div>
                                <p className="text-sm leading-tight text-white/90">Browse the complete library of university-level modules.</p>
                                </a>
                            </NavigationMenuLink>
                        </li>

                        <ListItem href="/modules/calculus" title="Calculus">Derivatives, limits, and integrals.</ListItem>
                        <ListItem href="/modules/linear-algebra" title="Linear Algebra">Vectors, matrices, and eigenvalues.</ListItem>
                    </ul>
                    </NavigationMenuContent>

                </NavigationMenuItem>
                
            </NavigationMenuList>
            </NavigationMenu>

        <div className="flex items-center space-x-8">
            <Link href="/about" className={`nav-btn-secondary ${isActive("/about") ? "nav-active" : ""}`}>About</Link>
            <Link href="/contact" className={`nav-btn-secondary ${isActive("/contact") ? "nav-active" : ""}`}>Contact</Link>
        </div>
        </div>
      </div>
    </nav>
  );
}

const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a href={href} className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white ${className}`} {...props}>
          <div className="text-sm font-medium leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}