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


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
