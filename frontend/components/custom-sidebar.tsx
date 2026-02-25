"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, GraduationCap, LayoutDashboard } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Courses", url: "/courses", icon: BookOpen },
  { title: "Mastery", url: "/mastery/subjects", icon: GraduationCap },
]

export function CustomSidebar() {
  return (
    <Sidebar collapsible="icon" className="top-16 h-[calc()100svh-4rem]! border-r border-t">
      <SidebarContent>
        <SidebarHeader>
          <Link href="/">
            <Image src="/tutorio-icon-white-border.png" alt="Logo" width={35} height={35} priority />
          </Link>   
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Tutorio Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}