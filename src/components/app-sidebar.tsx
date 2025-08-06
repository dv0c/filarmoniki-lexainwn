"use client"

import {
  IconDashboard,
  IconInnerShadowTop,
  IconListDetails
} from "@tabler/icons-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Github, Instagram, Users2 } from "lucide-react"
import Link from "next/link"
import { AnimateIcon } from "./animate-ui/icons/icon"
import { SquareArrowOutUpRight } from "./animate-ui/icons/square-arrow-out-up-right"
import { RippleButton } from "./animate-ui/buttons/ripple"
import { useIsNative } from "@/hooks/useIsNavtive"
import { Badge } from "./ui/badge"

const data = {
  user: {
    name: "Φιλαρμονική",
    email: "filarmoniki@info.gr",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Μαθητές",
      url: "/dashboard/students",
      icon: Users2,
    },
    {
      title: "Όργανα",
      url: "/dashboard/instruments",
      icon: IconListDetails,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const isNative = useIsNative();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">ΦΙΛΑΡΜΟΝΙΚΗ.</span>
                <Badge variant={'secondary'}>{isNative ? 'v1.2.APP' : 'v1.2.WEB'}</Badge>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>

        {/* <NavUser user={data.user} /> */}
        <AnimateIcon animateOnHover>
          <Link href={'https://meindesk.gr'} target="_blank" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
            <SquareArrowOutUpRight size={15} />
            Meindesk
          </Link>
        </AnimateIcon>
        <AnimateIcon animateOnHover>
          <Link href={'https://github.com/dv0c'} target="_blank" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
            <SquareArrowOutUpRight size={15} />
            Github
          </Link>
        </AnimateIcon>
        <AnimateIcon animateOnHover>
          <Link href={'https://instagram.com/tasosmeidanis'} target="_blank" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
            <SquareArrowOutUpRight size={15} />
            Instagram
          </Link>
        </AnimateIcon>
        {isNative ? (
          <RippleButton className="mt-5" onClick={() => window.location.href = 'https://a1459699-b40d-460e-bc58-750a763916e8.vercel.app/api/export?type=charges&filter=join_charges'}>
            <div className="flex items-center gap-2 text-sm">
              <IconDashboard size={15} />
              Εξαγωγή EXCEL
            </div>
          </RippleButton>
        ) : (
          <RippleButton className="mt-5" onClick={async () => {
            await fetch('/api/export?type=charges&filter=join_charges', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              cache: 'no-store',
            }).then((res) => {
              if (!res.ok) {
                throw new Error('Network response was not ok');
              }
              return res.blob();
            }).then((blob) => {
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'export_users.xlsx';
              document.body.appendChild(a);
              a.click();
              a.remove();
              window.URL.revokeObjectURL(url);
            }).catch((error) => {
              console.error('There was a problem with the fetch operation:', error);
            })
          }}>
            <div className="flex items-center gap-2 text-sm">
              <IconDashboard size={15} />
              Εξαγωγή EXCEL
            </div>
          </RippleButton>
        )}
        {!isNative ? <p className="text-xs text-neutral-500 mt-5">© 2025 - 2026 Anastasios Meintanis. Website donated to Φιλαρμονική Λεχαινών.</p> : <p className="text-xs text-neutral-500 mt-5">© 2025 - 2026 Anastasios Meintanis. Application donated to Φιλαρμονική Λεχαινών.</p>}
      </SidebarFooter>
    </Sidebar>
  )
}
