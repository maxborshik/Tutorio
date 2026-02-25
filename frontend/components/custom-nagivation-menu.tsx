"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { List, Navigation } from "lucide-react"
import { ModeToggle } from "./system-theme-toggle";
import { Button } from "./ui/button";

export function CustomNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="p-2">
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link href="/">
              <Image src="/tutorio-logo-white.png" alt="Logo" width={50} height={60} priority />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Button variant="outline" asChild>
              <Link href="/courses">Courses</Link>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button variant="outline" asChild>
              <Link href="/about">About</Link>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="ml-auto">
          <ModeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button variant="outline" asChild>
              <Link href="/logout">Log Out</Link>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
