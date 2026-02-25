import type { Metadata } from "next";
import "./globals.css";
import  { ThemeProvider } from "@/components/theme-provider";
import { CustomNavigationMenu } from "@/components/custom-nagivation-menu";
import { CustomSidebar } from "@/components/custom-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Tutorio",
  description: "Your AI powered learning companion.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SidebarProvider>
            <CustomSidebar />
              <SidebarInset>
                <CustomNavigationMenu />
                <div className="min-h-screen">
                  {children}
                </div>
              </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
