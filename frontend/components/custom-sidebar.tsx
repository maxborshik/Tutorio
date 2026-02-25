import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Link from "next/dist/client/link"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/">
          <Image src="/tutorio-icon-white-border.png" alt="Logo" width={35} height={35} priority />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}