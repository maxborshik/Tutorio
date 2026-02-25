"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "./system-theme-toggle"
import { Menu, PanelLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useSidebar } from "./ui/sidebar"

export function CustomNavigationMenu() {
  const { toggleSidebar } = useSidebar()
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex items-center justify-between px-4 md:px-8 w-full h-12">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Toggle Sidebar" onClick={toggleSidebar}>
            <PanelLeft className="h-5 w-5" />
          </Button>
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Image src="/tutorio-logo-white.png" alt="Tutorio Logo" width={60} height={60} priority />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-4 md:px-8">
          <div className="relative w-full max-w-md hidden sm:flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search subjects, modules, exams and more..."
              className="w-full rounded-lg bg-muted/50 pl-9 focus-visible:bg-background"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/subjects" className="w-full cursor-pointer">Subjects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about" className="w-full cursor-pointer">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact" className="w-full cursor-pointer">Contact Us</Link>
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem className="text-red-500 cursor-pointer focus:text-red-500">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>
    </nav>
  )
}